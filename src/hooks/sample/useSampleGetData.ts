import { CACHE_KEY } from '@/enum'
import { sampleRepository } from '@/repositories/api'
import useSWRMutation from 'swr/mutation'

export const useSampleGetData = () => {
  const res = useSWRMutation(CACHE_KEY.SAMPLE.GET, sampleRepository.get)

  return {
    data: res.data,
    isLoading: res.isMutating,
    trigger: res.trigger,
  }
}
