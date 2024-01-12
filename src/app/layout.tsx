import clsx from 'clsx'
import type {Metadata} from 'next'
import {Montserrat, Nunito_Sans} from 'next/font/google'
import {PropsWithChildren} from 'react'
import Burger from '@/components/ui/Burger/Burger'
import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import AppProvider from '@/components/ui/AppProvider'
import './globals.css'
import Modal from "@/components/ui/modal/Modal";

// Montserrat 'regular', 'bold'
const montserrat = Montserrat({
    style: ['normal'],
    subsets: ['latin'],
    weight: ['400', '700'],
    preload: true,
    display: 'swap',
    variable: '--font-montserrat'
})

const nunito_sans = Nunito_Sans({
    style: ['normal'],
    subsets: ['latin'],
    weight: ['400', '600'],
    preload: true,
    display: 'swap',
    variable: '--font-nunito-sans'
})

export const metadata: Metadata = {
    title: {
        default: 'Nova developers',
        template: 'Nova developers | %s',
        absolute: 'Nova developers'
    },
    description: 'Best software developing',
    // generator: 'Next.js',
    // applicationName: 'Next.js',
    // referrer: 'origin-when-cross-origin',
    keywords: [
        'Next.js',
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'SASS',
        'LESS',
        'Accessebility',
        'Semantics',
        'ES6',
        'Front-end',
        'Back-end',
        'Web-sites'
    ],
    authors: [
        {name: 'Vladyslav Tesliuk', url: 'https://github.com/Lordpluha'},
        {name: 'Igor Zimin', url: 'https://github.com/merdernoty'}
    ],
    creator: 'https://github.com/Roma8642',
    publisher: 'https://github.com/Roma8642'
    // formatDetection: {
    // 	email: true,
    // 	address: true,
    // 	telephone: true,
    // },
}

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang='en'>
        <body
            className={clsx(
                montserrat.variable,
                nunito_sans.variable,
                'relative block z-0'
            )}
            id='page-wrap'
        >
        <AppProvider>
            <Burger/>
            <div id='outer-container'>
                <Header/>
                <main className='z-0'>{children}</main>
                <Footer/>
            </div>
            <Modal/>
        </AppProvider>
        </body>
        </html>
    )
}
