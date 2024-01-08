import type {Metadata} from "next";
import Header from "./components/Header";
import { Montserrat, Nunito_Sans } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Container from "@/app/components/Container/Container";
import Footer from "@/app/components/Footer/Footer";
import React from "react";
import Projects from "@/app/components/projects/Projects";

// Montserrat 'regular', 'bold'
const montserrat = Montserrat({
    style: ['normal'],
    subsets: ['latin'],
    weight: ['400', '700'],
    preload: true,
    display: 'swap',
    variable: '--font-montserrat'
})

// Nunito Sans 'regular', 'semi bold'
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
    keywords: ['Next.js', 'React', 'JavaScript'],
    authors: [
        { name: 'Vladyslav Tesliuk', url: 'https://github.com/Lordpluha' },
        { name: 'Igor Zimin', url: 'https://github.com/merdernoty' }
    ],
    creator: 'https://github.com/Roma8642',
    publisher: 'https://github.com/Roma8642',
    // formatDetection: {
    // 	email: true,
    // 	address: true,
    // 	telephone: true,
    // },
}
const projectsData = [
    {
        imageUrl: '/img/gregas.jpg',
        title: 'Project 1',
        description: ` Description for Project 2Description for Project 2Description for Project 2Description for Project 2`,

    },
    {
        imageUrl: '/img/gregas.jpg',
        title: 'Project 2',
        description: ` Description for Project 2Description for Project 2Description for Project 2Description for Project 2`,

    },
    {
        imageUrl: '/img/gregas.jpg',
        title: 'Project 2',
        description: ` Description for Project 2Description for Project 2Description for Project 2Description for Project 2`,

    },
    {
        imageUrl: '/img/gregas.jpg',
        title: 'Project 2',
        description: ` Description for Project 2Description for Project 2Description for Project 2Description for Project 2`,
    },
];

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <title>Nova developers</title>
            <link rel="icon" href="/img/icon.ico" type="image/png" />
        </head>
        <body className={clsx(montserrat.variable, nunito_sans.variable)}>
        {children}
        <Container>
            <Header />
            <Projects projects={projectsData}  />
            <Footer />
        </Container>
        </body>
        </html>
    );
}

