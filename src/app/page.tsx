import infoData from '../components/data/infoData.json'
import projectsData from '../components/data/projects.json'
import videoBlockData from '../components/data/videoBlockData.json'
import Container from '../components/ui/Container/Container'
import Info from '../components/ui/Info/Info'
import ServiceBlock from '../components/ui/ServiceBlock/ServiceBlock'
import Team from '../components/ui/Team/Team'
import VideoBlock from '../components/ui/VideoBlock/VideoBlock'
import Projects from '../components/ui/projects/Projects'

export default function Home() {
	return (
		<Container>
			<Info mainText={infoData.mainText} subText={infoData.subText} />
			<VideoBlock
				mainText={videoBlockData.mainText}
				subText={videoBlockData.subText}
				videoSrc={videoBlockData.videoSrc}
			/>
			<ServiceBlock />
			<Projects projects={projectsData} />
		</Container>
	)
}
