import { reactive, computed, watch } from 'vue';
import { MediaFetch } from '/@/utils/MediaFetch';
import { debounce } from '/@/lib/function';
import { MEDIA_STATUS } from '/@/store/types';

const mediaState = reactive({
    media: undefined,
    status: MEDIA_STATUS.EMPTY
})

const setStatus = (status) => {
    if (!setStatus) throw '`status` not defined'
    mediaState.status = status
}

const getMedia = async (id, type) => {
    setStatus(MEDIA_STATUS.LOADING)
    try {
        const response = await MediaFetch.get(id, type)
        mediaState.media = response
        console.info('getMedia', mediaState.media)
        setStatus(MEDIA_STATUS.LOADED)
        
    } catch (error) {
        setStatus(MEDIA_STATUS.ERROR)
        throw error
    }
}

export default {
    mediaState,
    getMedia
}
