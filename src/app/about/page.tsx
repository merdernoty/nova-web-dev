import Image from 'next/image'

import { SvgItem_2 } from '@/components/SvgComponents'
import { Blur1, Blur2 } from '@/components/ui/Blur'
import Container from '@/components/ui/Container/Container'
import Team from '@/components/ui/Team/Team'

export default function AboutPage() {
	return (
		<Container>
			<Blur1 />
			<section className='mt-12'>
				<h2 className='text-4xl mb-4 font-semibold'>Our History</h2>
				<div className='flex flex-col md:flex-row'>
					<p className='text-gray-500 md:w-1/2 md:pr-4'>
						Our company, Nova Developers, was established in 2023
						with the aim of developing outstanding web applications.
						Since then, we have been committed to an innovative
						approach in web development, providing unique solutions
						for our clients. Our team of experienced developers and
						designers takes pride in transparent collaboration,
						effective communication, and professionalism at every
						stage of the project. Nova Developers is dedicated to
						creating innovative web applications that empower our
						clients to succeed in the digital environment.
					</p>
					<Image
						className='md:w-1/2 rounded-md'
						width={400}
						height={400}
						alt='about'
						src='/img/aboutpage.png'
					/>
				</div>
			</section>
			<SvgItem_2 />
			<Blur2 />
			<div className='my-8'>
				<Team />
			</div>
		</Container>
	)
}
