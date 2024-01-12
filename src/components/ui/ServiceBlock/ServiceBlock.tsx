import { FC } from 'react'

import ServiceItem from './ServiceItem'

const ServiceBlock: FC = () => {
	return (
		<div className='flex flex-col items-center gap-12 w-full min-h-screen'>
			<h2 className='max-w-[695px] text-center text-4xl lg:text-5xl xl:text-6xl leading-13 lg:leading-[70px] font-bold text-white'>
				The Service We Provide For You
			</h2>

			<div className='flex flex-col lg:flex-row justify-center items-baseline gap-6'>
				<ServiceItem
					icon='/icons/development.svg'
					mainText='Development'
					subText='Create a platform with the best and coolest quality from us.'
				/>
				<ServiceItem
					icon='/icons/design.svg'
					mainText='UI/UX Designer'
					subText='We provide UI/UX Design services, and of course with the best quality'
				/>
				<ServiceItem
					icon='/icons/graphicDesign.svg'
					mainText='Graphic Designer'
					subText='We provide Graphic Design services, with the best designers'
				/>
			</div>
		</div>
	)
}

export default ServiceBlock
