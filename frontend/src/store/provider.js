import { StoreSymbol } from '/@/store/symbol'
import { provide } from 'vue'
import searchStore from '/@/store/searchStore'

export const SearchStoreProvider = {
  setup(props, context) {
    provide(StoreSymbol, searchStore)
    return () => context.slots.default()
  },
}