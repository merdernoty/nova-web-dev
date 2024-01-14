'use client'

import clsx from 'clsx'

import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useContext } from 'react'

import { ModalContext } from '@/components/context/AppContext'

const MyModal: FC = () => {
	const [visible, setVisible] = useContext(ModalContext)

	return (
		<div
			className={clsx(
				'fixed',
				'top-0',
				'bottom-0',
				'right-0',
				'left-0',
				'flex',
				'items-center',
				'justify-center',
				'bg-opacity-75',
				'bg-black',
				'z-50',
				visible ? 'flex' : 'hidden'
			)}
			onClick={() => {
				setVisible(false)
				document.body.classList.remove('fixed')
			}}
		>
			<div
				className='p-8 rounded-lg bg-customBlack caret-amber-50 text-amber-50'
				onClick={e => e.stopPropagation()}
			>
				<div className='flex justify-between items-center gap-8'>
					<Link
						href='https://www.linkedin.com/company/nova-developers-co/'
						target={'_blank'}
					>
						<Image
							src='/icons/linkedIn.svg'
							alt='LinkedIn'
							width={50}
							height={50}
						/>
					</Link>
					<Link
						href='https://www.instagram.com/nova_it_developers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D'
						target={'_blank'}
					>
						<Image
							src='/icons/inst.svg'
							alt='instagram'
							width={50}
							height={50}
						/>
					</Link>
					<a
						href='mailto:developersnova1@gmail.com'
						target={'_blank'}
					>
						<Image
							src='/icons/mail.svg'
							alt='mail'
							width={50}
							height={50}
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default MyModal
