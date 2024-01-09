import React from 'react'
import Link from 'next/link'
import Logo from '../Brand/Logo/Logo'

import Container from '../Container/Container'
const Footer = () => (
    <footer>
        <Container
            additionalStyles='
				flex
				justify-between
				flex-col
				mx-auto
				items-center
				text-lg
				content-stretch
				lg:content-center
				flex-wrap
				pt-12
				pb-20
				lg:flex-row
				lg:gap-y-10
				gap-y-14
			'
        >
            <div>
                <Logo link={true}/>
            </div>
            <ul
                className='flex flex-col items-center gap-y-14
					mt-6
					*:font-bold
					*:text-customGrey *:sm:mx-5
					lg:mx-5
					lg:mt-0
					sm:flex-row
				'
            >
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
            <Link href='/#Copyright' className='text-center text-base'>
                &copy; 2023 Nova Developers Co. All Rights Reserved
            </Link>
        </Container>
    </footer>
)

export default Footer;