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
    status: ''
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
    console.info({newVal, oldVal})
    if (newVal !== oldVal) getSearchResults(newVal)
})

const setSearchValue = debounce(function(searchValue = '') {
    console.info(searchValue)
    searchState.searchValue = searchValue
}, 500)

export default {
    searchState,
    setSearchValue,
}
