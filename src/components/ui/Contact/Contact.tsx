import React from 'react'
import ContactBtn from "@/components/ui/Header/ContactBtn";
import styles from "@/components/ui/Header/Header.module.scss";

function Contact() {
	return (
		<div>
			<div className='flex justify-between items-center mt-10 py-12'>
				<span className='text-xl md:text-4xl font-bold text-white w-[512px]'>
					Contact us for the service you want to use
				</span>

				<ContactBtn additionalStyles={[styles.header__contactBtn_contact_us ,styles.header__contactBtn]}/>


			</div>
		</div>
	)
}

export default Contact
