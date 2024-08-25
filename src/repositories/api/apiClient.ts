import { API_ENDPOINT } from '@/enum'
import { ApiError } from '@/models'

export const apiClient = async <T>(endPoint: RequestInfo, config?: RequestInit, controller?: AbortController | null): Promise<T> => {
  const headers = {
    'content-type': 'application/json',
  }
  const baseURL = API_ENDPOINT
  const response = await fetch(`${baseURL}${endPoint}`, {
    ...config,
    headers: {
      ...headers,
      ...config?.headers,
    },
    signal: controller?.signal,
  }).catch((error) => {
    if (error.name === 'AbortError') return
    return Promise.reject(new ApiError())
  })
  if (!response) return Promise.resolve() as unknown as Promise<T>
  return await response.json()
}
