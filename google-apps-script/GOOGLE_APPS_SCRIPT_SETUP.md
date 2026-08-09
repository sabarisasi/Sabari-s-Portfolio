# Google Sheets Enquiry Backend — Setup Guide

This replaces Supabase for the hiring/project enquiry form. Every submission
becomes a new row in a Google Sheet in your Drive, and you get an email
notification. No database dashboard, no service keys in the frontend.

```
Portfolio Hiring Form
      ↓ (POST JSON)
Google Apps Script Web App     ← Code.gs in this folder
      ↓
Google Sheet in your Drive     ← new row per enquiry
      ↓
Email notification to you
```

## 1. Create or open the Google Sheet

- Go to [sheets.google.com](https://sheets.google.com) and create a new blank
  spreadsheet (or open one you already made for this).
- Name it whatever you like, e.g. **"Portfolio Enquiries"**.
- You don't need to add any headers or formatting yourself — the script
  creates the header row automatically the first time it runs.

## 2. Open the Apps Script editor

- In the Sheet, go to **Extensions → Apps Script**.
- Delete any placeholder code in the editor (e.g. the default empty
  `function myFunction() {}`).

## 3. Paste the script

- Open `google-apps-script/Code.gs` from this repo.
- Copy its entire contents and paste it into the Apps Script editor.
- Near the top, update this line with your real email address if it's
  different from what's already there:

  ```js
  const NOTIFICATION_EMAIL = 'sabari.sasi@zohomail.in';
  ```

- Click the **Save** icon (or press `Ctrl+S` / `Cmd+S`).

## 4. Deploy as a Web App

- Click **Deploy → New deployment**.
- Click the gear icon next to "Select type" and choose **Web app**.
- Fill in:
  - **Description**: `Portfolio enquiry backend` (or anything you like)
  - **Execute as**: `Me` (your Google account)
  - **Who has access**: `Anyone`
- Click **Deploy**.

## 5. Authorize permissions

- The first deploy will prompt you to authorize the script.
- Click **Authorize access**, choose your Google account, click **Advanced**
  if Google shows an "unverified app" warning, then **Go to (project name)
  (unsafe)** — this is expected for your own personal script — and
  **Allow**.
- This authorization lets the script write to your Sheet and send email as
  you. It never leaves Google's servers and no credentials are exposed.

## 6. Copy the Web App URL

- After deployment, Google shows a **Web app URL** that looks like:

  ```
  https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
  ```

- Copy this exact URL.

## 7. Add the URL to the portfolio

- In the portfolio project root, create (or edit) a `.env` file — copy
  `.env.example` if you don't have one yet.
- Set:

  ```
  VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
  ```

- If deploying on Vercel, add the same key/value under
  **Project Settings → Environment Variables**, then redeploy.
- Restart your local dev server (`npm run dev`) after editing `.env` so Vite
  picks up the new value.

## Redeploying after future script edits

Apps Script Web App URLs stay the same across edits **only if you use
"Manage deployments" → edit the existing deployment → New version**,
rather than creating a brand-new deployment each time. If you ever create a
new deployment, you'll get a new URL and must update `VITE_GOOGLE_APPS_SCRIPT_URL`
again.

---

## Google Sheet column structure (auto-created)

| Column | Source form field |
|---|---|
| Timestamp | set automatically by the script |
| Name | Your Name |
| Email | Email Address |
| Company | Company / Organization |
| Phone / WhatsApp | Phone / WhatsApp |
| Project Type | Project Type |
| Project Description | Project Description |
| Reference URL | Reference Website or Doc URL |
| Engagement Type | Engagement Type |
| Budget Range | Budget Range |
| Target Timeline | Target Timeline |
| Status | always `New` for new submissions |
| Preferred Contact | Preferred Contact Method (Step 4 of the form) — kept as an extra column so no data is lost |

Status values you can set manually in the Sheet as you work an enquiry:
`New`, `Contacted`, `In Discussion`, `Proposal Sent`, `Converted`, `Closed`.

No admin dashboard is built — you manage status directly inside Google
Sheets, and it's viewable/editable from the Google Sheets mobile app anytime.

## Excel compatibility

Google Sheets is the source of truth. Whenever you want an Excel copy:
**File → Download → Microsoft Excel (.xlsx)**. No separate Excel file is
created by the website itself.

---

## Testing the complete flow

1. Open the Web App URL directly in a browser — you should see:
   `{"success":true,"message":"Enquiry endpoint is live. Use POST to submit."}`
   This confirms the deployment itself is reachable.
2. With `VITE_GOOGLE_APPS_SCRIPT_URL` set, run the portfolio locally
   (`npm run dev`) and open the Contact/Hire section.
3. Fill out Steps 01–03 and submit on Step 04.
4. Confirm:
   - The button shows a submitting/loading state and is disabled while sending.
   - On success, the existing **"Project request received."** screen appears.
   - A new row appears in the Google Sheet with the correct data, a
     Timestamp, and Status = `New`.
   - A notification email arrives at your configured address.
5. To test failure handling, temporarily set an invalid
   `VITE_GOOGLE_APPS_SCRIPT_URL` (or turn off your network), submit again,
   and confirm:
   - The success screen does **not** appear.
   - A friendly error message appears instead.
   - Your entered form data is still there (nothing is cleared).
   - The submit button re-enables so you can try again.

## Permissions you'll be asked to authorize

- **See, edit, create, and delete your Google Sheets spreadsheets** — needed
  to write enquiry rows.
- **Send email as you** — needed for the notification email.

These are standard Apps Script permissions for a script running under your
own account; nothing is shared with or accessible by anyone else.
