import axios from 'axios'
import { TMDB_API_ENDPOINT, TMDB_API_TOKEN } from './../config/tmdb'

const http = axios.create({
    baseURL: TMDB_API_ENDPOINT,
    // only used w/ v4 of the api, we are back to v3
    // headers: { 
    //     Authorization: `Bearer ${TMDB_API_TOKEN}`
    // }
})

// attach api key on every outgoing request
const apiKeyInterceptor = http.interceptors.request.use(function (config) {
    // if params is not previously defined, create its
    if (!('params' in config)) config['params'] = {}
    config.params['api_key'] = TMDB_API_TOKEN
    return config
});
// http.interceptors.request.eject(apiKeyInterceptor);

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

    getMovie: async (id) => {
        if (!id) throw '`ids` not defined for getMovie(id)'
        try {
            const response = await http.get(`movie/${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    },

    getTv: async (id) => {
        try {
            const response = await http.get(`tv/${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    },

}

export { 
    TMDB
}