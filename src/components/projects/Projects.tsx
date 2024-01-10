'use client'
import React from 'react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


interface ProjectsProps {
    projects?: ProjectCardProps[];
}
import ProjectCard, {ProjectCardProps} from "./projectCard/ProjectCard";

export default function Projects({projects}: any) {
    return (
        <div >
            <Swiper
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=" w-full"
                slidesPerView={2}
            >
                {projects?.map((project: ProjectCardProps, index: number) => (
                    <SwiperSlide key={index}>
                        <ProjectCard {...project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
