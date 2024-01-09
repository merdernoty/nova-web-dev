import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface IProjectCardProps {
	imageUrl: string
	title: string
	description: string
	href?: string
}

const ProjectCard: FC<IProjectCardProps> = ({
	imageUrl,
	title,
	description,
	href = ''
}) => (
	<div className='bg-customGrey bg-opacity-10 p-4 rounded-md shadow-md text-white mx-auto max-w-screen-sm'>
		<Link href={href} className='overflow-hidden max-h-60 mb-4 block'>
			<Image
				className='w-full h-full object-cover object-center rounded-t-md hover:scale-110 transition duration-300'
				width={600}
				height={300}
				src={imageUrl}
				alt={title}
			/>
		</Link>
		<h2 className='text-xl font-semibold mb-2'>{title}</h2>
		<p className='text-gray-300 overflow-hidden overflow-ellipsis whitespace-normal'>
			{description}
		</p>
	</div>
)

export default ProjectCard
