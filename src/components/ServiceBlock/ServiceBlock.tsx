import ServiceItem from './ServiceItem'

interface ServiceBlockProps {
	mainText: string
	subText: string
	videoSrc: string
}

const ServiceBlock = () => {
	return (
		<div className='flex flex-col items-center gap-[50px] w-full mb-[474px]'>
			<h2 className='max-w-[695px] text-center text-4xl lg:text-5xl xl:text-6xl leading-[54px] lg:leading-[70px] font-bold text-white'>
				The Service We Provide For You
			</h2>

			<div className='flex flex-col lg:flex-row justify-center items-baseline gap-[24px]'>
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
