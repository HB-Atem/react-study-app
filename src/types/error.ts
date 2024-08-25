import type { ERROR_STATUS } from '@/enum'

export type ErrorStatus = (typeof ERROR_STATUS)[keyof typeof ERROR_STATUS]

export type AppError = {
  type: ErrorStatus
}

export type ApiErrorResponseSchema = {
  errorCode?: string
  message?: string
  location?: string
}
