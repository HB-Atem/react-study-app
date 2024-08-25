import { CACHE_KEY } from '@/enum'
import type { UIStore } from '@/types'
import { useAppSWR } from '.'

const initialUIStore: UIStore = {
  isLoading: false,
}

export const useUIStore = (initialState?: UIStore) => {
  const initialData = initialState ? initialState : initialUIStore
  const { data, mutate } = useAppSWR(
    CACHE_KEY.STORE_UI,
    null, // fetcherはnull
    {
      fallbackData: initialData,
    },
  )
  const uiStore = data === undefined ? initialData : data

  const setUIStore = (data: Partial<UIStore>) => {
    mutate((cur) => ({ ...(cur ?? initialData), ...data }))
  }

  return { uiStore, setUIStore }
}
