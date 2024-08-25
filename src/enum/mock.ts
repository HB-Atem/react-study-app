/**
 * MOCKパターン定義
 */
export const GET_MOCK_PATTERN = {
  GET_400: 'get_400',
  GET_401: 'get_401',
  GET_403: 'get_403',
  GET_404: 'get_404',
  GET_422: 'get_422',
  GET_500: 'get_500',
} as const
export const POST_MOCK_PATTERN = {
  POST_400: 'post_400',
  POST_401: 'post_401',
  POST_403: 'post_403',
  POST_404: 'post_404',
  POST_422: 'post_422',
  POST_500: 'post_500',
} as const

export const PUT_MOCK_PATTERN = {
  PUT_400: 'put_400',
  PUT_401: 'put_401',
  PUT_403: 'put_403',
  PUT_404: 'put_404',
  PUT_422: 'put_422',
  PUT_500: 'put_500',
} as const

export const DELETE_MOCK_PATTERN = {
  DELETE_400: 'delete_400',
  DELETE_401: 'delete_401',
  DELETE_403: 'delete_403',
  DELETE_404: 'delete_404',
  DELETE_422: 'delete_422',
  DELETE_500: 'delete_500',
} as const
