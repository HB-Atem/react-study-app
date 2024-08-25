import { HTTP_STATUS } from '@/enum'
import { isApiError } from '@/models'
import { getErrorType } from '@/utils'
import { useCallback } from 'react'
import { useCache, useErrorStore } from '.'

export const useApiError = () => {
  const { setErrorState } = useErrorStore()
  const { clearCache } = useCache()
  // biome-ignore lint/correctness/useExhaustiveDependencies:
  const notifyError = useCallback(
    (mayBeApiError: { name: string }) => {
      // 想定したAPIのエラー以外は再throwする
      if (!isApiError(mayBeApiError)) {
        throw mayBeApiError
      }
      if (mayBeApiError.status === HTTP_STATUS.UNAUTHORIZE) {
        clearCache()
      }
      setErrorState(getErrorType(mayBeApiError))
    },
    [setErrorState],
  )

  return { notifyError }
}
