import { API_URL } from '@/enum'
import type { ResponseGetSample } from '@/models'
import { HttpResponse, http } from 'msw'
import { mockErrorResponse } from '../mockErrorResponse'

const baseGetData: ResponseGetSample = {
  data: ['data1', 'data2'],
}

const get = http.get(`*${API_URL.SAMPLE.GET}`, async () => {
  mockErrorResponse('GET')

  const data: ResponseGetSample = baseGetData
  return HttpResponse.json(data, { status: 200 })
})

export const mockSampleRepositoryHandlers = [get]
