import clsx from 'clsx'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type TLogoProps = {
	link?: boolean
	addStyles?: string | string[]
}

/**
 * Logo component
 * @param {boolean}link wrap logo in <Link href="/">?
 * @param {string | string[]}addStyles additional classes for image/link
 */
const Logo: FC<TLogoProps> = ({ link = true, addStyles = '' }) => {
	const image = (
		<Image
			src='/brand-logo.svg'
			className={clsx(!link && addStyles, '')}
			width={105}
			height={65}
			alt='Nova developers co. logo'
		/>
	)
	return (
		<>
			{link ? (
				<Link href='/' className={clsx(addStyles)}>
					{image}
				</Link>
			) : (
				<>{image}</>
			)}
		</>
	)
}

export default Logo
