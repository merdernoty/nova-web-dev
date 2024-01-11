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
	const [teamData, setTeamData] = useState<any>([]) // Заменяем ITeam[] на any

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

			{Object.keys(teamData).map(teamSlug => (
				<div key={teamSlug}>
					<div className='bg-[#2C2C2E] rounded-md shadow-md text-white mx-auto max-w-screen-xl m-6'>
						<h2 className='text-2xl font-bold m-4 '>
							{teamSlug.toUpperCase()}
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 px-3 '>
							{teamData[teamSlug].map((member: ITeam) => (
								<div key={member.id}>
									<div className='overflow-hidden max-h-80 mb-4'>
										<Image
											width={800}
											height={400}
											src={member.avatar_url}
											alt={member.login}
											className='w-full h-full object-cover object-center rounded-t-md '
											style={{ padding: 0 }}
										/>
									</div>
									<div className='p-6'>
										<h2 className='text-md font-semibold mb-2 opacity-30'>
											{member.login}
										</h2>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Team
