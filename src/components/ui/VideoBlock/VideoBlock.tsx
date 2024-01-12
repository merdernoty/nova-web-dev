import { FC } from 'react'

type TVideoBlockProps = {
	mainText: string
	subText: string
	videoSrc: string
}

const VideoBlock: FC<TVideoBlockProps> = ({ mainText, subText, videoSrc }) => {
	return (
		<div className='flex flex-col w-full md:px-10 mb-[140px] md:mb-[150px]'>
			<div className='flex flex-col md:flex-row gap-[30px] md:gap-6 mb-[50px]'>
				<h2 className='flex-1 text-4xl lg:text-5xl xl:text-6xl leading-[54px] lg:leading-[70px] font-bold text-white'>
					{mainText}
				</h2>
				<p className='flex-1 font-nunito_sans text-white/70 text-base lg:text-[21px] md:leading-[39px] tracking-[-0.657px]'>
					{subText}
				</p>
			</div>

			<video
				width='1260'
				height='670'
				controls={true}
				autoPlay={false}
				src={videoSrc}
			></video>
		</div>
	)
}

export default VideoBlock
