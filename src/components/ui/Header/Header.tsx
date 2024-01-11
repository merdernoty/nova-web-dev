import React from 'react'

import Logo from '../Brand/Logo/Logo'
import Container from '../Container/Container'
import BurgerBtn from './BurgerBtn'
import ContactBtn from './ContactBtn'
import HeaderLinks from './HeaderLinks'

export const headerHeightNum = 15
const headerHeight = `${headerHeightNum}vh`

export default function Home() {
	return (
		<>
			<header
				className='w-full fixed bg-customBlack bg-opacity-75 z-10'
				style={{ height: headerHeight }}
			>
				<Container additionalStyles='flex py-5 justify-between items-center'>
					<Logo />
					<HeaderLinks additionalStyles='hidden sm:flex' />
					<ContactBtn />
					<BurgerBtn />
				</Container>
			</header>

			<div
				className='relative block w-full'
				style={{ height: headerHeight }}
			></div>
		</>
	)
}
