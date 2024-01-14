import React from 'react'

export const Blur1 = () => {
	return (
		<div className='absolute z-20'>
			<div className='absolute transform top-[256px] left-64 -translate-x-1/2 -translate-y-1/2 rotate-45'>
				<div className='blur-[300px] xl:h-[800px] xl:w-[312px] h-[30px] bg-gradient-to-r from-indigo-600 rounded-full overflow-hidden relative z-10 '>
					<div className='w-full h-full filter blur-md absolute top-0 left-0'></div>
				</div>
			</div>
		</div>
	)
}
