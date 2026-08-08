import React from 'react';
import { Project } from '../../types/project';
import { ProjectDetailsPage } from '../projects/ProjectDetailsPage';
import { projectsData } from '../../data/projects';

interface CaseStudyViewProps {
  project: Project;
  allProjects?: Project[];
  onBack: () => void;
  onOpenCode: (project: Project) => void;
  onOpenLive: (project: Project) => void;
  onSelectProject?: (project: Project) => void;
  onNavigateContact?: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  allProjects = projectsData,
  onBack,
  onOpenCode,
  onOpenLive,
  onSelectProject,
  onNavigateContact
}) => {
  return (
    <ProjectDetailsPage
      project={project}
      allProjects={allProjects}
      onBack={onBack}
      onOpenCode={onOpenCode}
      onOpenLive={onOpenLive}
      onSelectProject={onSelectProject || onOpenCode}
      onNavigateContact={onNavigateContact || onBack}
    />
  );
};
