import http from "../../lib/request";
import { Repo, UserDetails } from "../../services/github/models";

export const GithubAPI = {
    async getUserRepos(username: string): Promise<Repo[]> {
        try {
            const response = await http.get<Repo[]>(`/users/${username}/repos`);
            return response.data;
        } catch (error: any) {
            console.error(`Error fetching repos for user ${username}:`, error);
            throw error.response?.data || error.message;
        }
    },

    async getUserDetails(username: string): Promise<UserDetails> {
        try {
            const response = await http.get<UserDetails>(`/users/${username}`);
            return response.data;
        } catch (error: any) {
            console.error(`Error fetching details for user ${username}:`, error);
            throw error.response?.data || error.message;
        }
    },
};
