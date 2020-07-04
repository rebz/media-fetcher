import { provide } from 'vue'
import { MediaSymbol, SearchSymbol } from '/@/store/symbol'
import searchStore from '/@/store/searchStore'
import mediaStore from '/@/store/mediaStore'

export const StoreProvider = {
  setup(props, context) {
    provide(SearchSymbol, searchStore)
    provide(MediaSymbol, mediaStore)
    return () => context.slots.default()
  },
}