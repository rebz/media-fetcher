import axios from 'axios'
import { TMDB_API_ENDPOINT, TMDB_API_TOKEN } from './../config/tmdb'

const http = axios.create({
    baseURL: TMDB_API_ENDPOINT,
    headers: {
        Authorization: `Bearer ${TMDB_API_TOKEN}`
    }
})

const TMDB = {

    search: async (searchValue) => {
        try {
            const response = await http.get('search/multi', {
                params: {
                    query: searchValue
                }
            })
            return response.data
        } catch (error) {
            throw error
        }
    },
}

export { 
    TMDB
}