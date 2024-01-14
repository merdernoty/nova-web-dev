'use client'

import clsx from 'clsx'

import Link from 'next/link'
import { FC, useContext, useEffect } from 'react'

import { BurgerContext } from '@/components/context/AppContext'

const Links = [
	{
		name: 'Home',
		href: '/',
		blockId: ''
	},
	{
		name: 'Services',
		href: '/#Services',
		blockId: 'Services'
	},
	{
		name: 'Our Project',
		href: '/#Our-Project',
		blockId: 'Our-Project'
	},
	{
		name: 'About Us',
		href: '/about',
		blockId: ''
	}
]

const HeaderLinks: FC = () => {
	const [isBurgerOpen, setIsBurgerOpen] = useContext(BurgerContext)
	useEffect(() => {
		if (isBurgerOpen) {
			document.body.classList.add('fixed')
		} else {
			document.body.classList.remove('fixed')
		}
		return () => {
			document.body.classList.remove('fixed')
		}
	}, [isBurgerOpen])
	return (
		<>
			<nav
				className={clsx(
					'ease-in-out duration-300',
					'bg-customBlack fixed top-0 right-0 h-screen w-3/4 flex items-center justify-center',
					'sm:bg-transparent sm:relative sm:h-auto sm:w-auto sm:order-2 sm:max-w-auto sm:block sm:translate-x-0',
					isBurgerOpen ? 'translate-x-0' : 'translate-x-full'
				)}
			>
				<ul className={'flex gap-10 flex-col sm:flex-row items-center'}>
					{Links.map((el, i) => (
						<li
							key={i}
							className='items-stretch hover:text-customBlue text-lg transition duration-300 shrink-0'
						>
							<Link
								href={el.href}
								onClick={() => {
									setIsBurgerOpen(false)
								}}
							>
								{el.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}

export default HeaderLinks
