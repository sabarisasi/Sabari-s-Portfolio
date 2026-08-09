/**
 * DEV BY SABARI M - Hiring / Project Enquiry Backend
 * ----------------------------------------------------
 * This script runs entirely on Google's servers (Apps Script), NOT in the
 * portfolio frontend. It receives enquiry submissions as JSON POST requests,
 * appends each one as a new row in a Google Sheet, and emails a notification.
 *
 * Nothing in this file is ever sent to or bundled with the React app.
 * The only thing the frontend knows is the public Web App URL produced
 * when you deploy this script (see GOOGLE_APPS_SCRIPT_SETUP.md).
 *
 * SETUP (also see GOOGLE_APPS_SCRIPT_SETUP.md for full step-by-step):
 *   1. Set NOTIFICATION_EMAIL below to your professional email address.
 *   2. Deploy as a Web App (Execute as: Me, Who has access: Anyone).
 *   3. Copy the /exec URL into VITE_GOOGLE_APPS_SCRIPT_URL in the portfolio env config.
 */

// ---------------------------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------------------------

// Where the "New Project Enquiry" notification email is sent.
var NOTIFICATION_EMAIL = 'sabari.sasi@zohomail.in'; // <-- change if needed

// Name of the sheet/tab enquiries are written to. Created automatically if missing.
var SHEET_NAME = 'Enquiries';

// Exact column order for the Google Sheet. The header row is auto-created.
var COLUMNS = [
  'Timestamp',
  'Name',
  'Email',
  'Company',
  'Phone / WhatsApp',
  'Project Type',
  'Project Description',
  'Reference URL',
  'Engagement Type',
  'Budget Range',
  'Target Timeline',
  'Status',
  'Preferred Contact'
];

// Fields the frontend must send. Matches the hiring form's required fields.
var REQUIRED_FIELDS = ['name', 'email', 'projectType', 'projectDescription', 'engagementType'];

var VALID_STATUSES = ['New', 'Contacted', 'In Discussion', 'Proposal Sent', 'Converted', 'Closed'];

// ---------------------------------------------------------------------------
// ENTRY POINT
// ---------------------------------------------------------------------------

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'Unable to save enquiry' });
    }

    var data = JSON.parse(e.postData.contents);

    var validationError = validateEnquiry(data);
    if (validationError) {
      return jsonResponse({ success: false, error: validationError });
    }

    var savedRow = saveEnquiryToSheet(data);
    if (!savedRow) {
      return jsonResponse({ success: false, error: 'Unable to save enquiry' });
    }

    // Email failure must NOT undo a successfully saved enquiry - handled
    // independently and only logged, never thrown back to the client.
    try {
      sendNotificationEmail(savedRow);
    } catch (emailErr) {
      Logger.log('Email notification failed (enquiry was still saved): ' + emailErr);
    }

    return jsonResponse({ success: true });
  } catch (err) {
    Logger.log('doPost error: ' + err);
    return jsonResponse({ success: false, error: 'Unable to save enquiry' });
  }
}

// Simple health check so you can confirm the deployment URL works from a browser.
function doGet() {
  return jsonResponse({ success: true, message: 'Enquiry endpoint is live. Use POST to submit.' });
}

// ---------------------------------------------------------------------------
// VALIDATION
// ---------------------------------------------------------------------------

function validateEnquiry(data) {
  if (!data || typeof data !== 'object') {
    return 'Invalid submission payload';
  }

  for (var i = 0; i < REQUIRED_FIELDS.length; i++) {
    var field = REQUIRED_FIELDS[i];
    if (!data[field] || String(data[field]).trim() === '') {
      return 'Missing required field: ' + field;
    }
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(String(data.email).trim())) {
    return 'Invalid email address';
  }

  return null; // valid
}

// ---------------------------------------------------------------------------
// GOOGLE SHEET STORAGE
// ---------------------------------------------------------------------------

// Appends one new row for the enquiry. Uses a lock so concurrent submissions
// never overwrite each other. Returns the row's data (as saved) or null on failure.
function saveEnquiryToSheet(data) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // wait up to 30s for other concurrent submissions

  try {
    var sheet = getOrCreateSheet();
    ensureHeaderRow(sheet);

    var timestamp = new Date();
    var status = 'New'; // always "New" for a fresh enquiry, regardless of client input

    var rowValues = [
      timestamp,
      String(data.name || '').trim(),
      String(data.email || '').trim(),
      String(data.company || '').trim(),
      String(data.phone || '').trim(),
      String(data.projectType || '').trim(),
      String(data.projectDescription || '').trim(),
      String(data.referenceUrl || '').trim(),
      String(data.engagementType || '').trim(),
      String(data.budget || '').trim(),
      String(data.timeline || '').trim(),
      status,
      String(data.preferredContact || '').trim()
    ];

    sheet.appendRow(rowValues); // always adds a NEW row - never overwrites

    return {
      timestamp: timestamp,
      name: rowValues[1],
      email: rowValues[2],
      company: rowValues[3],
      phone: rowValues[4],
      projectType: rowValues[5],
      projectDescription: rowValues[6],
      referenceUrl: rowValues[7],
      engagementType: rowValues[8],
      budget: rowValues[9],
      timeline: rowValues[10],
      status: rowValues[11],
      preferredContact: rowValues[12]
    };
  } catch (err) {
    Logger.log('saveEnquiryToSheet error: ' + err);
    return null;
  } finally {
    lock.releaseLock();
  }
}

// Gets the target sheet/tab, creating it if the spreadsheet doesn't have it yet.
function getOrCreateSheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    var sheets = spreadsheet.getSheets();
    if (sheets.length === 1 && sheets[0].getName() === 'Sheet1') {
      // Reuse the default blank "Sheet1" instead of leaving it empty and unused.
      sheet = sheets[0];
      sheet.setName(SHEET_NAME);
    } else {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }
  }

  return sheet;
}

// Creates the header row automatically if the sheet is empty or headers are missing.
function ensureHeaderRow(sheet) {
  var firstRow = sheet.getRange(1, 1, 1, COLUMNS.length).getValues()[0];
  var hasHeaders = firstRow.join('') !== '';

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS]);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, COLUMNS.length);
  }
}

// ---------------------------------------------------------------------------
// EMAIL NOTIFICATION
// ---------------------------------------------------------------------------

function sendNotificationEmail(row) {
  var subject = 'New Project Enquiry - DEV BY SABARI M';

  var body =
    'New Project Enquiry Received\n\n' +
    'Name: ' + row.name + '\n' +
    'Email: ' + row.email + '\n' +
    'Company: ' + (row.company || '-') + '\n' +
    'Phone / WhatsApp: ' + (row.phone || '-') + '\n\n' +
    'Project Type: ' + row.projectType + '\n' +
    'Project Description: ' + row.projectDescription + '\n' +
    'Reference URL: ' + (row.referenceUrl || '-') + '\n\n' +
    'Engagement Type: ' + row.engagementType + '\n' +
    'Budget Range: ' + (row.budget || '-') + '\n' +
    'Target Timeline: ' + (row.timeline || '-') + '\n\n' +
    'Preferred Contact Method: ' + (row.preferredContact || '-') + '\n\n' +
    'Submitted: ' + row.timestamp + '\n' +
    'Status: ' + row.status;

  MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
}

// ---------------------------------------------------------------------------
// RESPONSE HELPER
// ---------------------------------------------------------------------------

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
