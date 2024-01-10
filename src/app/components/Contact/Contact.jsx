import React from 'react'

const Contact = () => {
	return (
		<div className='Contact 
        mt-10
        w-screen-xl
        bg-[#1E1E2080]
        backdrop-opacity-10
        h-max
        rounded-md
        relative'>
            <div className='absolute right-10 top-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
			<div
				className='
            pt-28       sm:pt-20        md:pt-28        lg:pt-28        xl:pt-28 
            ml-8       sm:ml-12        md:ml-12        lg:ml-12        xl:ml-12 
            max-w-[80vw]    sm:max-w-[60vw]     md:max-w-[50vw]     lg:max-w-[55vw]     xl:max-w-[35vw]'
			>
				<p
					className='
                text-3xl    sm:text-3xl    md:text-4xl     lg:text-5xl     xl:text-5xl 
                leading-tight 
                font-bold 
                text-white'
				>
					Contact us for the service you want to use
				</p>
			</div>
			<a
				href='#'
				className='
                absolute
                top-56              sm:top-20               md:top-32          lg:top-34          xl:top-30 
                left-[2rem]         sm:left-[33rem]         md:left-[40rem]          lg:left-[54rem]        xl:left-[54rem]
                block 
                max-w-32 
                rounded-md 
                bg-indigo-600
                px-3.5 
                py-2.5 
                text-center 
                text-sm 
                font-semibold 
                text-white shadow-sm 
                hover:bg-indigo-500 
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600'
			>
				Contact us
			</a>
            <div className='Rounds
            relative
            top-20          sm:top-6               md:top-12          lg:top-8           xl:top-8 
            left-4          sm:left-[2rem]         md:left-[4rem]     lg:left-[5rem]     xl:left-[5rem]
            pb-48           sm:pb-36               md:pb-48            lg:pb-40            xl:pb-44
            w-24 
            h-24
            '>
                <div className="absolute  rounded-full h-8 w-8 my-6 border-2 border-white bg-transparent"></div>
                <div className="absolute left-3 top-4 rounded-full h-8 w-8 my-6 border border-white bg-transparent"></div>
            </div>
        
		</div>
	)
}

export default Contact
