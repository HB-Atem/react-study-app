import { ERROR_STATUS, HTTP_STATUS } from '@/enum'
import type { ApiError } from '@/models'

export const getErrorType = (error: ApiError) => {
  switch (error.status) {
    case HTTP_STATUS.BAD_REQUEST:
      return { type: ERROR_STATUS.BAD_REQUEST }
    case HTTP_STATUS.SERVER_ERROR:
      return { type: ERROR_STATUS.SERVER_ERROR }
    case HTTP_STATUS.FORBIDDEN:
      return { type: ERROR_STATUS.FORBIDDEN }
    case HTTP_STATUS.NOT_FOUND:
      return { type: ERROR_STATUS.NOT_FOUND }
    case HTTP_STATUS.UNAUTHORIZE:
      return { type: ERROR_STATUS.UNAUTHORIZE }
    default:
      return { type: ERROR_STATUS.SERVER_ERROR }
  }
}
