import Link from 'next/link'
import { FC } from 'react'

type THeaderLink = {
	name: string
	href: string
}

const HeaderLinksArray: Array<THeaderLink> = [
	{ name: 'Home', href: '/' },
	{ name: 'Services', href: '/#Services' },
	{ name: 'Our Projects', href: '/#Our-Project' },
	{ name: 'About Us', href: '/#About-Us' }
]

const HeaderLinks: FC = () => {
	return (
		<nav>
			<ul className='flex'>
				{HeaderLinksArray.map((el, i) => (
					<li key={i}>
						<Link
							href={el.href}
							className='hover:text-customBlue text-lg text-customGrey transition duration-300 mx-5'
						>
							{el.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default HeaderLinks
