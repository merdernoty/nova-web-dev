import projectsData from './components/data/projects.json'
import Container from './components/Container/Container'
import Projects from './components/projects/Projects'
import infoData from './components/data/infoData.json'
import Info from "./components/Info/Info";
export default function Home() {
	return (
		<Container>
			<Info mainText={infoData.mainText} subText={infoData.subText} />
			<Projects projects={projectsData} />
		</Container>
	)
}
