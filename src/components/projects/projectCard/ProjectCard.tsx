import React from 'react';
import Image from "next/image";

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description }) => (
    <div className="bg-[#2C2C2E] rounded-md shadow-md text-white mx-auto max-w-screen-sm">
        <div className="overflow-hidden max-h-60 mb-4">
            <Image
                width={600}
                height={300}
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover object-center rounded-t-md"
                style={{ padding: 0 }}
            />
        </div>
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-300 overflow-hidden overflow-ellipsis whitespace-normal">
                {description}
            </p>
        </div>
    </div>
);

export default ProjectCard;
export type { ProjectCardProps };
