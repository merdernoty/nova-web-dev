import React from 'react'
import Image from 'next/image'
export const SvgItem_1 = () =>  {
	return (
		<div>
			{' '}
			<Image
				src='/svg/squre.svg'
				className='ml-auto'
				width='60'
				height='60'
				alt='squre'
			></Image>
			<Image
				src='/svg/zikline.svg'
				className='md:m-auto'
				width='60'
				height='60'
				alt='zikline'
			></Image>
		</div>
	)
}


