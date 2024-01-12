'use client'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import React from 'react'

import ProjectCard, { TProjectCardProps } from './projectCard/ProjectCard'

type TProjectsProps = {
	projects?: TProjectCardProps[]
}

export default function Projects({ projects }: TProjectsProps) {
	return (
		<section>
			<Swiper
				grid={{
					rows: 1
				}}
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: true
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='w-full'
				slidesPerView={1}
			>
				{projects?.map((project: TProjectCardProps, index: number) => (
					<SwiperSlide key={index}>
						<ProjectCard {...project} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
