import React from 'react'

export const Blur2 = () => {
	return (
		<div className='absolute z-20'>
			<div className='flex absolute transform -top-[200px] left-[900px] -translate-x-1/2 -translate-y-1/2 rotate-45'>
				<div className='blur-[280px] xl:h-[400px] xl:w-[112px]  bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full overflow-hidden relative z-10 '>
					<div className='w-full h-full filter blur-md absolute top-0 left-0'></div>
				</div>
			</div>
		</div>
	)
}

