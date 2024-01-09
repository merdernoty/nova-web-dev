import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type TProjectCardProps = {
	imageUrl: string
	title: string
	description: string
}

const ProjectCard: FC<TProjectCardProps> = ({
	imageUrl,
	title,
	description
}) => (
	<Link
		href={'/'}
		className='bg-customGrey p-4 rounded-md shadow-md text-white mx-auto max-w-screen-sm'
	>
		<div className='overflow-hidden max-h-60 mb-4'>
			<Image
				className='w-full h-full object-cover object-center rounded-t-md'
				width={600}
				height={300}
				src={imageUrl}
				alt={title}
			/>
		</div>
		<h2 className='text-xl font-semibold mb-2'>{title}</h2>
		<p className='text-gray-300 overflow-hidden overflow-ellipsis whitespace-normal'>
			{description}
		</p>
	</Link>
)

export default ProjectCard
export type { TProjectCardProps }
