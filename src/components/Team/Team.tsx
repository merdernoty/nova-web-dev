'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import getTeam from '@/api/GetTeam'

interface ITeam {
	id: number
	login: string
	avatar_url: string
}

function Team() {
	const [teamData, setTeamData] = useState<ITeam[]>([])

	useEffect(() => {
		getTeam()
			.then(res => {
				setTeamData(res)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
	return (
		<div>
			<span className='text-4xl font-bold'>Our Best Team:</span>
			<div className='bg-[#2C2C2E] rounded-md shadow-md text-white mx-auto max-w-screen-xl m-6'>
				<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4'>
					{teamData.map((item: ITeam) => (
						<div key={item.id}>
							<div className='overflow-hidden max-h-80 mb-4'>
								<Image
									width={800} // Увеличиваем ширину изображения
									height={400} // Увеличиваем высоту изображения
									src={item.avatar_url}
									alt={item.login}
									className='w-full h-full object-cover object-center rounded-t-md'
									style={{ padding: 0 }}
								/>
							</div>
							<div className='p-6'>
								{' '}
								{/* Увеличиваем внутренний отступ */}
								<h2 className='text-xl font-semibold mb-2'>
									{item.login}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Team
