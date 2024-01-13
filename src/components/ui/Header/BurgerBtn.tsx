'use client'

import { useContext } from 'react'

import { BurgerContext } from '@/components/context/burger-context'

import BurgerIcon from '../icons/BurgerIcon'
import CloseCrossIcon from '../icons/CloseCrossIcon'

const BurgerBtn = () => {
	const [isOpen, setIsOpen] = useContext(BurgerContext)
	return (
		<button
			className='sm:hidden sm:order-last z-30'
			onClick={() => {
				setIsOpen(state => !state)
			}}
		>
			{isOpen ? <CloseCrossIcon /> : <BurgerIcon />}
		</button>
	)
}

export default BurgerBtn
