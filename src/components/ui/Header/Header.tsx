import Logo from '../Brand/Logo/Logo'
import Container from '../Container/Container'
import BurgerBtn from './BurgerBtn'
import ContactBtn from './ContactBtn'
import styles from './Header.module.scss'
import HeaderLinks from './HeaderLinks'

export default function Header() {
	return (
		<>
			<header className='w-full sticky bg-customBlack bg-opacity-90 z-10 shadow-lg top-0'>
				<Container additionalStyles='flex py-5 justify-between items-center'>
					<Logo addStyles='order-first' />
					<BurgerBtn />
					<ContactBtn
						additionalStyles={[
							styles.header__contactBtn_header,
							styles.header__contactBtn
						]}
					/>
					<HeaderLinks />
				</Container>
			</header>
		</>
	)
}
