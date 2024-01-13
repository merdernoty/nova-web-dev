'use client'

import { Dispatch, SetStateAction, createContext } from 'react'

type TContext = [boolean, Dispatch<SetStateAction<boolean>>]
export const BurgerContext = createContext<TContext>(null!)
