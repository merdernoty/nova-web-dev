import { FC } from 'react'

import { TIconProps } from '@/components/types/Icon.types'

const CloseCrossIcon: FC<TIconProps> = ({ size = 50, color = '#fff' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			width={size}
			height={size}
			viewBox='0,0,256,256'
		>
			<g
				fill={color}
				fillRule='nonzero'
				stroke='none'
				strokeWidth='1'
				strokeLinecap='butt'
				strokeLinejoin='miter'
				strokeMiterlimit='10'
				strokeDasharray=''
				strokeDashoffset='0'
				fontFamily='none'
				fontWeight='none'
				fontSize='none'
				textAnchor='none'
			>
				<g transform='scale(5.12,5.12)'>
					<path d='M40.7832,7.27148c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-14.33594,14.33594l-14.33594,-14.33594c-0.37669,-0.38827 -0.89458,-0.60741 -1.43555,-0.60742c-0.81437,0.00019 -1.54731,0.49409 -1.85324,1.24881c-0.30592,0.75472 -0.12373,1.61957 0.46066,2.18673l14.33594,14.33594l-14.33594,14.33594c-0.52247,0.50164 -0.73292,1.24653 -0.55021,1.9474c0.18272,0.70087 0.73005,1.24821 1.43093,1.43093c0.70087,0.18272 1.44577,-0.02774 1.9474,-0.55021l14.33594,-14.33594l14.33594,14.33594c0.50164,0.52247 1.24653,0.73293 1.94741,0.55021c0.70088,-0.18272 1.24821,-0.73005 1.43093,-1.43093c0.18272,-0.70088 -0.02774,-1.44577 -0.55021,-1.94741l-14.33594,-14.33594l14.33594,-14.33594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z'></path>
				</g>
			</g>
		</svg>
	)
}

export default CloseCrossIcon
