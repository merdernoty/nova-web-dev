import clsx from 'clsx'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type TLogoProps = {
	link?: boolean
	additionalStyles?: string | string[]
}

/**
 * Logo component
 * @param {boolean}link wrap logo in <Link href="/">?
 * @param {string | string[]}additionalStyles additional styles in string (tailwindCSS | classnames)
 */
const Logo: FC<TLogoProps> = ({ link = true, additionalStyles = '' }) => {
	const image = (
		<Image
			src='/brand-logo.svg'
			width={105}
			height={65}
			alt='Nova developers co. logo'
			className={clsx(additionalStyles)}
		/>
	)
	return <>{link ? <Link href='/'>{image}</Link> : <>{image}</>}</>
}

export default Logo
