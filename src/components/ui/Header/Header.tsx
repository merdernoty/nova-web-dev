import { FC } from 'react'

import Logo from '../Brand/Logo/Logo'
import Container from '../Container/Container'
import ContactBtn from './ContactBtn'
import HeaderLinks from './HeaderLinks'

export const headerHeight: string = '17vh'

const Header: FC = () => {
	return (
		<>
			<header
				className={`w-full fixed bg-customBlack bg-opacity-75 h-[${headerHeight}]`}
			>
				<Container additionalStyles='flex py-5 justify-between items-center'>
					<Logo />
					<HeaderLinks />
					<ContactBtn />
				</Container>
			</header>
		</>
	)
}

export default Header
