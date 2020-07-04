import { reactive, computed, watch } from 'vue';
import { MediaFetch } from '/@/utils/MediaFetch';
import { debounce } from '/@/lib/function';

const STATUSES = {
    LOADING: 'loading',
    ERROR: 'error',
}

const searchState = reactive({
    searchValue: '',
    results: [],
    pagination: {
        page: 1,
        totalResults: 0,
        totalPages: 0,
    },
    status: '',
    selectedMedia: {
        id: undefined,
        type: undefined
    }
})

const getSearchResults = async (searchValue) => {
    try {
        const response = await MediaFetch.search(searchValue)
        searchState.results = response.results
        searchState.pagination.page = response.page
        searchState.pagination.totalResults = response.total_results
        searchState.pagination.totalPages = response.total_pages
        
    } catch (error) {
        throw error
    }
}

watch(() => searchState.searchValue, (newVal, oldVal) => {
    if (newVal !== oldVal) getSearchResults(newVal)
})

const setSearchValue = debounce(function(searchValue = '') {
    searchState.searchValue = searchValue
}, 500)

const selectMedia = (mediaId, type) => {
    searchState.selectedMedia.id = mediaId
    searchState.selectedMedia.type = type
    return 
}

const hasSelected = computed(() => {
    return searchState.selected
})

export default {
    searchState,
    selectMedia,
    setSearchValue,
}
