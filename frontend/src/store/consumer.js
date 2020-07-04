import { SearchSymbol, MediaSymbol } from '/@/store/symbol'
import { inject } from 'vue'

export function useSearchStore() {
  const searchStore = inject(SearchSymbol)
  if (!searchStore) throw '`searchStore` doesn\'t exist'
  return searchStore
}

export function useMediaStore() {
  const mediaStore = inject(MediaSymbol)
  if (!mediaStore) throw '`useMediaStore` doesn\'t exist'
  return mediaStore
}