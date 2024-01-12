import clsx from 'clsx'

import Link from 'next/link'
import { FC } from 'react'

const Links = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'Services',
		href: '/#Services'
	},
	{
		name: 'Our Project',
		href: '/#Our-Project'
	},
	{
		name: 'About Us',
		href: '/about'
	}
]

type THeaderLinksProps = {
	additionalStyles?: string | string[]
	burger?: boolean
	onClick?: void
}

const HeaderLinks: FC<THeaderLinksProps> = ({
	additionalStyles = '',
	burger = false,
	onClick = () => {}
}) => {
	if (!burger)
		return (
			<>
				<nav className={clsx(additionalStyles)}>
					<ul className={'flex gap-x-10'}>
						{Links.map((el, i) => (
							<li
								key={i}
								className='cursor-pointer hover:text-customBlue text-lg transition duration-300'
							>
								<Link href={el.href} className='block'>
									{el.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</>
		)
	return (
		<>
			{Links.map((el, i) => (
				<Link
					key={i}
					href={el.href}
					className='cursor-pointer hover:text-customBlue text-lg transition duration-300'
					onClick={() => {
						onClick()
					}}
				>
					{el.name}
				</Link>
			))}
		</>
	)
}

export default HeaderLinks
