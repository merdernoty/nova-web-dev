import { Dispatch, SetStateAction, createContext } from 'react'

export const BurgerContext =
	createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => {}])
export const ModalContext =
	createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => {}])
