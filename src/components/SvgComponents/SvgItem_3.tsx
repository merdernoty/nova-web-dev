import Image from 'next/image'
import React from 'react'

export const SvgItem_3 = () => {
	return (
		<div>
			<Image
				src='/svg/play.svg'
				className='md:ml-24'
				width='160'
				height='160'
				alt='play'
			></Image>
			<Image
				src='/svg/plus.svg'
				className='rotate-45 ml-auto'
				width='25'
				height='25'
				alt='plus'
			></Image>
		</div>
	)
}
