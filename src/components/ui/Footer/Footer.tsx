import Link from 'next/link'
import { FC } from 'react'

import Logo from '../Brand/Logo/Logo'
import Container from '../Container/Container'
import styles from './Footer.module.scss'

const Footer: FC = () => (
	<footer>
		<Container additionalStyles={styles.footer__container}>
			<div>
				<Logo link={true} />
			</div>
			<ul className={styles.footer__list}>
				<li>
					<Link href='/#Support'>Support</Link>
				</li>
				<li>
					<Link href='/#Privacy-Policy'>Privacy Policy</Link>
				</li>
				<li>
					<Link href='/#Terms-and-Conditions'>
						Terms and Conditions
					</Link>
				</li>
			</ul>
			<Link href='/#Copyright' className={styles.footer__copyright}>
				&copy; 2023 Nova Developers Co. All Rights Reserved
			</Link>
		</Container>
	</footer>
)

export default Footer
