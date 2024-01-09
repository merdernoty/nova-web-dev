import { FC } from 'react'

import ProjectCard, { TProjectCardProps } from './projectCard/ProjectCard'

type TProjectsProps = {
	projects?: TProjectCardProps[]
}

const Projects: FC<TProjectsProps> = ({ projects }) => (
	<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
		{projects?.map((project, index) => (
			<ProjectCard key={index} {...project} />
		))}
	</div>
)

export default Projects
