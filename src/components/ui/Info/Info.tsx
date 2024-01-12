import Image from 'next/image'
import { FC } from 'react'

import { headerHeightNum } from '../Header/Header'

interface InfoProps {
	mainText: string
	subText: string
}
const Info: FC<InfoProps> = ({ mainText, subText }) => {
	return (
		<section style={{ minHeight: `${100 - headerHeightNum}vh` }}>
			<div className='sm:my-14'>
				<div className='flex flex-col md:flex-row justify-between'>
					<div className='md:w-1/2 md:pr-4 mb-4 md:mb-0'>
						<h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-relaxed text-white'>
							{mainText}
						</h1>
						<p>{subText}</p>
					</div>
					<div className='md:w-1/3'>
						<Image
							width={500}
							height={500}
							src='/img/mainImage.jpg'
							alt='preview'
							className='w-full h-auto'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Info
