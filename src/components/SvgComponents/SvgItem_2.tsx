import Image from 'next/image'
import React from 'react'

export const SvgItem_2 = () =>  {
	return (
		<div>
			<Image
				src='/svg/plus.svg'
				className=' '
				width='30'
				height='30'
				alt='plus'
			></Image>
			<Image
				src='/svg/play.svg'
				className='ml-auto'
				width='160'
				height='160'
				alt='play'
			></Image>
		</div>
	)
}


