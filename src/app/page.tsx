import projectsData from '@/components/data/projects.json'
import Container from '@/components/ui/Container/Container'
import Projects from '@/components/ui/projects/Projects'
import Info from "@/components/Info/Info";
import infoData from '@/components/data/infoData.json'
export default function Home() {
	return (
		<Container>
			<Info  mainText={infoData.mainText} subText={infoData.subText}/>
			<Projects projects={projectsData} />
		</Container>
	)
}
