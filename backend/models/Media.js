import { TMDB_IMAGES_ENDPOINT } from './../config/tmdb'
import { TMDB } from './../utils/TMDB'

const parseMedia = (media) => {
    if (media.media_type === 'person') return false
    const isMovie = media.media_type === 'movie'
    return Object.freeze({
        id: media.id,
        title: !isMovie ? media.name : media.title,
        poster: media.poster_path ? `${TMDB_IMAGES_ENDPOINT}original${media.poster_path}` : null,
        backdrop: media.backdrop_path ? `${TMDB_IMAGES_ENDPOINT}original${media.backdrop_path}` : null,
        date: isMovie ? media.release_date : media.first_air_date,
        overview: media.overview,
        type: media.media_type
    })
}

const Media = {
    search: async (query) => {
        if (!query) throw 'Please define a `query` param'
        try {
            const response = await TMDB.search(query)
    
            return {
                ...response,
                results: response.results.map(parseMedia).filter(i => i)
            }
    
        } catch (error) {
            throw error
        }
    },
    details: async (id, type) => {
        if (!id || !type) throw '`id` and `type` arguments must be defined when fetching media details'
        
        try {
            const method = type === 'movie' ? 'getMovie' : 'getTv'
            const response = await TMDB[method](id)
            return response
    
        } catch (error) {
            throw error
        }
    },
    parse: parseMedia
}

export {
    Media
}