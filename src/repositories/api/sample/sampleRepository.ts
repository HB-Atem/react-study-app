import { API_URL } from '@/enum'
import type { QueryParamGetSample, ResponseGetSample } from '@/models'
import { apiClient } from '..'

const get = async (_: string, { arg }: { arg: QueryParamGetSample }): Promise<ResponseGetSample> => {
  const queryParam = new URLSearchParams([['param', arg.param]])
  const response = await apiClient<ResponseGetSample>(`${API_URL.SAMPLE.GET}?${queryParam}`, {
    method: 'GET',
  })
  return response
}

export const sampleRepository = {
  get,
}
