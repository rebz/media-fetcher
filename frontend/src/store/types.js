export const STATUS = Object.freeze({
    ERROR: 'error',
    LOADED: 'loaded',
    LOADING: 'loading',
    SUCCESS: 'success',
})

export const SEARCH_STATUS = Object.freeze({
    ...STATUS,
})

export const MEDIA_STATUS = Object.freeze({
    ...STATUS,
    EMPTY: 'empty',
    UPDATE: 'update',
})