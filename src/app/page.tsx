import Image from 'next/image'

import {SvgItem_1, SvgItem_2, SvgItem_3, SvgItem_4} from '@/components/SvgComponents'

import {Blur1, Blur2} from '@/components/ui/Blur'

import Contact from '@/components/ui/Contact/Contact'

import infoData from '../components/data/infoData.json'
import projectsData from '../components/data/projects.json'
import videoBlockData from '../components/data/videoBlockData.json'
import Container from '../components/ui/Container/Container'
import Info from '../components/ui/Info/Info'
import ServiceBlock from '../components/ui/ServiceBlock/ServiceBlock'
import VideoBlock from '../components/ui/VideoBlock/VideoBlock'
import Projects from '../components/ui/projects/Projects'

export default function Home() {
	return (
		<>
			<Container>
				<Blur1 />
				<SvgItem_1 />
				<Info mainText={infoData.mainText} subText={infoData.subText} />
                <SvgItem_2 />
				<Blur2 />

				<VideoBlock
					mainText={videoBlockData.mainText}
					subText={videoBlockData.subText}
					videoSrc={videoBlockData.videoSrc}
				/>
                <SvgItem_3/>
				<Blur1 />
				<ServiceBlock />
                <SvgItem_4/>
				<Projects projects={projectsData} />
				<Blur2 />
			</Container>
			<div className='bg-gray-900 bg-opacity-45'>
				<Container>
					<Contact />
				</Container>
			</div>
		</>
	)
}
