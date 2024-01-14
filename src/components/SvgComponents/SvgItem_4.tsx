import Image from 'next/image'
import React from 'react'

export const SvgItem_4 = () => {
	return (
		<div>
			<Image
				src='/svg/squre.svg'
				className='rotate-45'
				width='60'
				height='60'
				alt='squre'
			></Image>
			<Image
				src='/svg/zikline.svg'
				className='ml-auto rotate-45'
				width='60'
				height='60'
				alt='zikline'
			></Image>
		</div>
	)
}
