import React from 'react'
import { EmailButton } from '../Email/Email'

function Contact() {
	return (
		<div>
			<div className='flex justify-between items-center mt-10 py-12'>
				<span className='text-xl md:text-4xl font-bold text-white w-[512px]'>
					Contact us for the service you want to use
				</span>
				<button className='p-1 ml-6 md:ml-0 md:p-2.5 my-8 border border-white rounded text-white bg-transparent hover:bg-indigo-700 transition duration-300'>
                <EmailButton email="developersnova1@gmail.com" label="Contact us" />
				</button>
			</div>
		</div>
	)
}

export default Contact
