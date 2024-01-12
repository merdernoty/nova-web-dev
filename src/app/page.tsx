import infoData from '../components/data/infoData.json'
import projectsData from '../components/data/projects.json'
import videoBlockData from '../components/data/videoBlockData.json'
import Container from '../components/ui/Container/Container'
import Info from '../components/ui/Info/Info'
import ServiceBlock from '../components/ui/ServiceBlock/ServiceBlock'
import VideoBlock from '../components/ui/VideoBlock/VideoBlock'
import Projects from '../components/ui/projects/Projects'
import Contact from '@/components/ui/Contact/Contact'



export default function Home() {

    return (
        <>
            <Container>
                <Info mainText={infoData.mainText} subText={infoData.subText}/>
                <VideoBlock
                    mainText={videoBlockData.mainText}
                    subText={videoBlockData.subText}
                    videoSrc={videoBlockData.videoSrc}
                />
                <ServiceBlock/>
                <Projects projects={projectsData}/>

            </Container>
            <div className='bg-gray-900 bg-opacity-45'>
                <Container>
                    <Contact/>
                </Container>
            </div>
        </>

    )
}
