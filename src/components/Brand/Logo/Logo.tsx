import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Logo component
 * @param {boolean}link wrap logo in <Link href="/">?
 */
const Logo = ({link=true}: {link: boolean}) => {
    const image = <Image
        src="/brand-logo.svg"
        width={105}
        height={65}
        alt="Nova developers co. logo"
    />
    return (
        <>
            {link
                ? <Link href='/'>
                    {image}
                </Link>
                : <>{image}</>}
        </>
    )
}

export default Logo