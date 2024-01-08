import React from 'react'
import Link from 'next/link'
import Logo from '../Brand/Logo/Logo'

const Footer = () => (
    <footer className='w-full'>
        <div className='max-w-[1260px] flex justify-between flex-col mx-auto items-center text-lg content-stretch flex-wrap
			pt-12 px-8 pb-20
			md:px-16 lg:flex-row lg:gap-y-10 gap-y-14
		'>
            <div>
                <Logo link={true} />
            </div>
            <ul className='flex flex-col items-center mt-6 gap-y-14
				*:font-bold *:text-customGrey *:sm:mx-5
				lg:mx-5 lg:mt-0 sm:flex-row
			'>
                <li><Link href='/'>Support</Link></li>
                <li><Link href='/'>Privacy Policy</Link></li>
                <li><Link href='/'>Terms and Conditions</Link></li>
            </ul>
            <Link href="/" className="text-center grow text-base">
                &copy; 2023 Nova Developers Co., All Rights Reserved
            </Link>
        </div>
    </footer>
)

export default Footer