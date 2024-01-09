import { FC } from 'react'

import Logo from '../Brand/Logo/Logo'
import Container from '../Container/Container'
import ContactBtn from './ContactBtn'
import HeaderLinks from './HeaderLinks'

export const headerHeight: string = '15vh'

const Header: FC = () => {
	return (
		<>
			<header
				className={`w-full fixed bg-customBlack bg-opacity-75 z-10`}
				style={{height: headerHeight}}
			>
				<Container additionalStyles='flex py-5 justify-between items-center'>
					<Logo />
					<HeaderLinks />
					<ContactBtn />
				</Container>
			</header>
			{/* Header divider */}
			<div className={`relative block w-full`} style={{height: headerHeight}}></div>
		</>
	)
}

export default Header
