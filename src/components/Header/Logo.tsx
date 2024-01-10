import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo: React.FC = () => {
	return (
		<div className='mt-6 '>
			<Link href="/">
				<Image
					src='/img/logo.png'
					width={100}
					height={100}
					alt='Logo'
				/>
			</Link>
		</div>
	)
}

export default Logo
