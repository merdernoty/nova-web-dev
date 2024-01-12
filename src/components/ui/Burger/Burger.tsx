'use client'

import React, { FC, useContext } from 'react'
import Menu from 'react-burger-menu/lib/menus/stack'

import { BurgerContext } from '@/components/context/AppContext'

import HeaderLinks from '../Header/HeaderLinks'
import './Burger.css'

type THeaderBurger = {
	isOpen?: boolean
}

const Burger: FC<THeaderBurger> = () => {
	const [isOpen, setIsOpen] = useContext(BurgerContext)
	return (
		<Menu
			right
			width='70vw'
			isOpen={isOpen}
			pageWrapId='page-wrap'
			outerContainerId='outer-container'
			customBurgerIcon={false}
			onClose={setIsOpen(false)}
			htmlClassName='fixed'
			itemListClassName='flex flex-col gap-y-10'
		>
			<HeaderLinks burger={true} onClick={setIsOpen(false)} />
		</Menu>
	)
}

export default Burger
