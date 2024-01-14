'use client'

import clsx from 'clsx'

import { FC, useContext } from 'react'

import { ModalContext } from '@/components/context/AppContext'

const ContactBtn: FC<{ additionalStyles?: string | string[] }> = ({
	additionalStyles
}) => {
	const [visible, setVisible] = useContext(ModalContext)
	return (
		<button
			className={clsx(additionalStyles)}
			onClick={() => {
				setVisible(true)
				document.body.classList.add('fixed')
			}}
		>
			Contact Us
		</button>
	)
}

export default ContactBtn
