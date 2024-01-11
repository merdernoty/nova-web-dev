'use client'

import { FC, PropsWithChildren, useState } from 'react'

import { BurgerContext } from '../context/burger-context'

const BurgerContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<BurgerContext.Provider value={[isOpen, setIsOpen]}>
			{children}
		</BurgerContext.Provider>
	)
}

export default BurgerContextProvider
