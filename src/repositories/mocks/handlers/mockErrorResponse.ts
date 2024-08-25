import { DELETE_MOCK_PATTERN, GET_MOCK_PATTERN, POST_MOCK_PATTERN, PUT_MOCK_PATTERN } from '@/enum'
import { HttpResponse } from 'msw'

export const mockErrorResponse = (type: 'GET' | 'POST' | 'PUT' | 'DELETE') => {
  const params = new URL(window.location.href)
  const data = { message: 'エラーです' }

  if (type === 'POST') {
    if (params.searchParams.has(POST_MOCK_PATTERN.POST_400)) {
      return HttpResponse.json(data, { status: 400 })
    }

    if (params.searchParams.has(POST_MOCK_PATTERN.POST_401)) {
      return HttpResponse.json(data, { status: 401 })
    }

    if (params.searchParams.has(POST_MOCK_PATTERN.POST_403)) {
      return HttpResponse.json(data, { status: 403 })
    }

    if (params.searchParams.has(POST_MOCK_PATTERN.POST_404)) {
      return HttpResponse.json(data, { status: 404 })
    }

    if (params.searchParams.has(POST_MOCK_PATTERN.POST_422)) {
      return HttpResponse.json(data, { status: 422 })
    }

    if (params.searchParams.has(POST_MOCK_PATTERN.POST_500)) {
      return HttpResponse.json(data, { status: 500 })
    }
  } else if (type === 'PUT') {
    if (params.searchParams.has(PUT_MOCK_PATTERN.PUT_400)) {
      return HttpResponse.json(data, { status: 400 })
    }

    if (params.searchParams.has(PUT_MOCK_PATTERN.PUT_401)) {
      return HttpResponse.json(data, { status: 401 })
    }

    if (params.searchParams.has(PUT_MOCK_PATTERN.PUT_403)) {
      return HttpResponse.json(data, { status: 403 })
    }

    if (params.searchParams.has(PUT_MOCK_PATTERN.PUT_404)) {
      return HttpResponse.json(data, { status: 404 })
    }

    if (params.searchParams.has(PUT_MOCK_PATTERN.PUT_422)) {
      return HttpResponse.json(data, { status: 422 })
    }

    if (params.searchParams.has(PUT_MOCK_PATTERN.PUT_500)) {
      return HttpResponse.json(data, { status: 500 })
    }
  } else if (type === 'DELETE') {
    if (params.searchParams.has(DELETE_MOCK_PATTERN.DELETE_400)) {
      return HttpResponse.json(data, { status: 400 })
    }

    if (params.searchParams.has(DELETE_MOCK_PATTERN.DELETE_401)) {
      return HttpResponse.json(data, { status: 401 })
    }

    if (params.searchParams.has(DELETE_MOCK_PATTERN.DELETE_403)) {
      return HttpResponse.json(data, { status: 403 })
    }

    if (params.searchParams.has(DELETE_MOCK_PATTERN.DELETE_404)) {
      return HttpResponse.json(data, { status: 404 })
    }

    if (params.searchParams.has(DELETE_MOCK_PATTERN.DELETE_422)) {
      return HttpResponse.json(data, { status: 422 })
    }

    if (params.searchParams.has(DELETE_MOCK_PATTERN.DELETE_500)) {
      return HttpResponse.json(data, { status: 500 })
    }
  } else {
    if (params.searchParams.has(GET_MOCK_PATTERN.GET_400)) {
      return HttpResponse.json(data, { status: 400 })
    }

    if (params.searchParams.has(GET_MOCK_PATTERN.GET_401)) {
      return HttpResponse.json(data, { status: 401 })
    }

    if (params.searchParams.has(GET_MOCK_PATTERN.GET_403)) {
      return HttpResponse.json(data, { status: 403 })
    }

    if (params.searchParams.has(GET_MOCK_PATTERN.GET_404)) {
      return HttpResponse.json(data, { status: 404 })
    }

    if (params.searchParams.has(GET_MOCK_PATTERN.GET_422)) {
      return HttpResponse.json(data, { status: 422 })
    }

    if (params.searchParams.has(GET_MOCK_PATTERN.GET_500)) {
      return HttpResponse.json(data, { status: 500 })
    }
  }
}
