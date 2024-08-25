import { CACHE_KEY } from '@/enum'
import { useAppSWR } from '@/hooks'
import type { AppError } from '@/types'

const initialErrorState: AppError | null = null

export const useErrorStore = (initialState?: AppError) => {
  const initialData = initialState ? initialState : initialErrorState
  const { data, mutate: setErrorState } = useAppSWR(CACHE_KEY.STORE_ERROR, null, {
    fallbackData: initialData,
  })
  const errorState = data === undefined ? initialData : data

  return { errorState, setErrorState }
}
