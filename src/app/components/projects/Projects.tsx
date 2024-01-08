import React from 'react';
import ProjectCard, {ProjectCardProps} from '@/app/components/projects/projectCard/ProjectCard';

interface ProjectsProps {
    projects?: ProjectCardProps[];
}

const Projects: React.FC<ProjectsProps> = ({projects}) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects?.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
    </div>
);

export default Projects;