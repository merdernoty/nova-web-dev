'use client'

import {FC, PropsWithChildren, useState} from 'react'

import {BurgerContext, ModalContext} from '../context/AppContext'

const AppProvider: FC<PropsWithChildren> = ({children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={[visible, setVisible]}>
            <BurgerContext.Provider value={[isOpen, setIsOpen]}>
                {children}
            </BurgerContext.Provider>
        </ModalContext.Provider>
    )
}

export default AppProvider
