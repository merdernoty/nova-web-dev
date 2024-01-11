'use client'

import { useContext } from 'react'

import { BurgerContext } from '@/components/context/burger-context'

const BurgerBtn = () => {
	const [isOpen, setIsOpen] = useContext(BurgerContext)
	return (
		<button
			className='sm:hidden'
			onClick={() => {
				setIsOpen(true)
			}}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='50'
				height='50'
				viewBox='0,0,256,256'
			>
				<g
					fill='#ffffff'
					fillRule='nonzero'
					stroke='none'
					strokeWidth='1'
					strokeLinecap='butt'
					strokeLinejoin='miter'
					strokeMiterlimit='10'
					strokeDasharray=''
					strokeDashoffset='0'
					fontFamily='none'
					fontWeight='none'
					fontSize='none'
					textAnchor='none'
				>
					<g transform='scale(5.12,5.12)'>
						<path d='M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z'></path>
					</g>
				</g>
			</svg>
		</button>
	)
}

export default BurgerBtn
