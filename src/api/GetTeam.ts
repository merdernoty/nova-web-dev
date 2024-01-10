import { Octokit } from "@octokit/rest";

const getTeam = async () => {
    const octokit = new Octokit({
        auth: "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", // Используйте переменную окружения для хранения токена
    });

    try {
        const teams= ['i-team', 'the-boyz', 'vlados-team'];

        const teamMembers = [];

        for (const team_slug of teams) {
            const response = await octokit.teams.listMembersInOrg({
                org: 'NovaDevelopersCo',
                team_slug,
            });

            teamMembers.push(...response.data);
        }

        return teamMembers;
    } catch (error: any) {
        console.error(error.message);

        if (error.status === 401) {
            console.error('Unauthorized. Please check your credentials and permissions.');
        }

        throw error;
    }
};

export default getTeam;