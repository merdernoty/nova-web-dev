import Image from 'next/image'

interface ServiceItemProps {
	icon: string
	mainText: string
	subText: string
}

const ServiceItem = ({ icon, mainText, subText }: ServiceItemProps) => {
	return (
		<div className='w-full flex flex-col items-center gap-[20px] md:gap-6 px-[42px] py-[48px] text-center'>
			<Image src={icon} width={69} height={69} alt='Service Icon' />
			<h2 className='text-2xl lg:text-[28px] lg:leading-[38.19px] tracking-[-0.75px] font-semibold text-white'>
				{mainText}
			</h2>
			<p className='text-white/70 text-base md:text-lg lg:text-xl leading-[28px] tracking-[-0.5px]'>
				{subText}
			</p>
		</div>
	)
}

export default ServiceItem
