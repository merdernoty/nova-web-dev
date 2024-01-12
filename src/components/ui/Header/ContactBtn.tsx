import { FC } from 'react'

import styles from './Header.module.scss'

const ContactBtn: FC = () => {
	return <button className={styles.header__contactBtn}>Contact Us</button>
}

export default ContactBtn
