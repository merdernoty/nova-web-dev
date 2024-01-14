import Logo from '../Brand/Logo/Logo'
import Container from '../Container/Container'
import BurgerBtn from './BurgerBtn'
import ContactBtn from './ContactBtn'
import HeaderLinks from './HeaderLinks'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<>
			<header
				className='w-full sticky bg-customBlack bg-opacity-90 z-10 shadow-lg top-0'
			>
				<Container additionalStyles='flex py-5 justify-between items-center'>
					<Logo addStyles='order-first'/>
					<BurgerBtn />
					<ContactBtn />
					<HeaderLinks />
				</Container>
			</header>
		</>
	)
}
