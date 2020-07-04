<template>
  <store-provider>
    <div class="container mx-auto">
      <search-input />
      <search-results />
      <search-selected />
    </div>
  </store-provider>
</template>

<script>

import { StoreProvider } from '/@/store/provider.js'
import SearchInput from '/@/components/SearchInput.vue'
import SearchResults from '/@/components/SearchResults.vue'
import SearchSelected from '/@/components/SearchSelected.vue'

export default {
  name: 'App',
  components: {
    SearchInput,
    StoreProvider,
    SearchResults,
    SearchSelected,
  }
}
</script>
