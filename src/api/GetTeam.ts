import { Octokit } from '@octokit/rest'

const getTeam = async () => {
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN // Используйте переменную окружения для хранения токена
	})

	try {
		const teams: any[] = ['i-team', 'the-boyz', 'vlados-team']

		const teamMembers: any = {}

		for (const team_slug of teams) {
			const response = await octokit.teams.listMembersInOrg({
				org: 'NovaDevelopersCo',
				team_slug
			})

			teamMembers[team_slug] = response.data
		}

		return teamMembers
	} catch (error: any) {
		console.error(error.message)

		if (error.status === 401) {
			console.error(
				'Unauthorized. Please check your credentials and permissions.'
			)
		}

		throw error
	}
}

export default getTeam
