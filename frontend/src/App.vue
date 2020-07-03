<template>
  <search-store-provider>
    <div class="container mx-auto">
      <search-input />
      <search-results />
    </div>
  </search-store-provider>
</template>

<script>

import { SearchStoreProvider } from '/@/store/provider.js'
import SearchInput from '/@/components/SearchInput.vue'
import SearchResults from '/@/components/SearchResults.vue'

export default {
  name: 'App',
  components: {
    SearchInput,
    SearchStoreProvider,
    SearchResults
  }
}
</script>
