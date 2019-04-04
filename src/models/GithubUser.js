import axios from "axios";
const BASE_URL = "https://api.github.com";

class GithubUser {
    static getUserInfo(username) {
        return axios.get(`${BASE_URL}/users/${username}`)
            .then(({ data }) => data)
            .catch(({ response }) => {
                throw new Error(response.data.message);
            });
    }
    static getRepositories(username) {
        return axios.get(`${BASE_URL}/users/${username}/repos?sort=pushed&per_page=100`)
            .then(({ data }) => data)
            .catch(({ response }) => {
                throw new Error(response.data.message);
            });
    }

    static getLanguages(repositories) {
        const languages = repositories.reduce((prev, curr) => {
            if (curr.language) {
                if (prev[curr.language]) {
                    prev[curr.language]++;
                } else {
                    prev[curr.language] = 1;
                }
            }
            return prev;
        }, {});
        return Object.keys(languages).sort((a, b) => languages[b] - languages[a]);
    }
}

export default GithubUser;