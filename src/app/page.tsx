import projectsData from '@/components/data/projects.json'
import Container from '@/components/ui/Container/Container'
import Projects from '@/components/ui/projects/Projects'

export default function Home() {
	return (
		<Container>
			<Projects projects={projectsData} />
		</Container>
	)
}
