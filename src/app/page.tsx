import Container from '../components/Container/Container'
import Info from '../components/Info/Info'
import Team from '../components/Team/Team'
import VideoBlock from '../components/VideoBlock/VideoBlock'
import infoData from '../components/data/infoData.json'
import projectsData from '../components/data/projects.json'
import videoBlockData from '../components/data/videoBlockData.json'
import Projects from '../components/projects/Projects'

export default function Home() {
	return (
		<Container>
			<Info mainText={infoData.mainText} subText={infoData.subText} />
			<VideoBlock
				mainText={videoBlockData.mainText}
				subText={videoBlockData.subText}
				videoSrc={videoBlockData.videoSrc}
			/>
			<Team/>
			<Projects projects={projectsData} />
		</Container>
	)
}
