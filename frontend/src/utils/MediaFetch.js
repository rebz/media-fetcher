import { MEDIA_API_ENDPOINT } from '/@/config/api'
import axios from 'axios'

const http = axios.create({
    baseURL: MEDIA_API_ENDPOINT,
    // headers: {
    //     Authorization: `Bearer ${TMDB_API_TOKEN}`
    // }
})

const MediaFetch = {

    search: async (query) => {
        if (!query) throw '`query` not defined'
        try {
            const response = await http.get('media/search', { 
                params: { 
                    query: encodeURI(query) 
                } 
            })
            return response.data
        } catch (error) {
            throw error
        }
    },
}

export { 
    MediaFetch
}