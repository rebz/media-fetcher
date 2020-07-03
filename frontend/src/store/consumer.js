import { StoreSymbol } from '/@/store/symbol'
import { inject } from 'vue'

export function useSearchStore() {
  const searchStore = inject(StoreSymbol)
  if (!searchStore) throw '`searchStore` doesn\'t exist'
  return searchStore
}