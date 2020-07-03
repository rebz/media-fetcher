<template>
    <div class="p-4 flex flex-col items-center">
        <label for="search" class="pb-2 text-gray-600 font-medium">
            Search Movies and Televsion
        </label>
        <input
            id="search"
            class="max-w-full w-96 block px-4 rounded-md text-lg h-12 bg-white shadow hover:shadow-lg"
            @input="updateSearch"
            placeholder="Aliens, Rick and Morty, Gilmore Girls"
            v-model="searchValue"
        />
    </div>
</template>

<script>
import { useSearchStore } from "/@/store/consumer";
import { ref } from "vue";
export default {
    setup() {
        const { searchState, setSearchValue } = useSearchStore();

        const searchValue = ref("");

        const updateSearch = e => {
            setSearchValue(e.target.value);
        };

        return {
            searchValue,
            updateSearch
        };
    }
};
</script>