import clsx from 'clsx'

import { CSSProperties, FC, ReactNode } from 'react'

type TContainer = {
	children: ReactNode
	additionalStyles?: string
	style?: CSSProperties
}

const Container: FC<TContainer> = ({
	children,
	additionalStyles = '',
	style = {}
}) => {
	return (
		<div
			className={clsx('max-w-screen-xl mx-auto px-5', additionalStyles)}
			style={style}
		>
			{children}
		</div>
	)
}

export default Container
