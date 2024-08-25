import { useApiError, useSampleGetData, useUIStore } from '@/hooks'
import type { QueryParamGetSample, ResponseGetSample } from '@/models'
import { useEffect, useState } from 'react'

export const useSample = () => {
  const [sampleInput, setSampleInput] = useState<string>('') // 画面から記入したデータを表示する
  const [sampleData, setSampleData] = useState<ResponseGetSample>() // SampleAPIから取得したデータの状態管理

  const { trigger: sampleGetTrigger, isLoading: sampleGetLoading } = useSampleGetData() // SampleAPI
  const { notifyError } = useApiError()
  const { setUIStore } = useUIStore()

  const getSample = async (param: QueryParamGetSample) => {
    try {
      const res: ResponseGetSample = await sampleGetTrigger(param)
      setSampleData(res)
    } catch (error: any) {
      notifyError(error)
      return
    }
  }

  useEffect(() => {
    setUIStore({ isLoading: sampleGetLoading })
  }, [sampleGetLoading, setUIStore])

  return {
    sampleInput,
    setSampleInput,
    getSample,
    sampleData,
  }
}
