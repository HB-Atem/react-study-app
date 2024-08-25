import { API_URL, HTTP_STATUS } from '@/enum'
import * as hooks from '@/hooks'
import { API_ERROR, type ResponseGetSample } from '@/models'
import { sampleRepository } from '@/repositories/api'
import '@testing-library/jest-dom'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Sample } from '..'

// それぞれのテスト実行後にMockをClearする
afterEach(() => {
  vi.clearAllMocks()
})

const mockedSampleData: ResponseGetSample = {
  data: ['sample1', 'sample2'],
}

describe('サンプルページ', () => {
  it('初期表示', async () => {
    render(<Sample />)
    // data-testidの属性値でHTML要素を取得
    const sampleInput = screen.getByTestId('sampleInput')
    const inputData = screen.getByTestId('inputData')
    const getSampleButton = screen.getByTestId('getSampleButton')
    const samples = screen.queryAllByTestId(/sample-/) // queryの場合は取得できなくてもエラーにならないので、存在しない要素だと分かっている時に利用する

    // それぞれの要素に対して期待値通りの状態になっていることを確かめる
    expect(sampleInput).toHaveValue('')
    expect(inputData).toHaveTextContent('')
    expect(getSampleButton).toBeInTheDocument()
    for (const sample of samples) {
      expect(sample).not.toBeInTheDocument()
    }
  })

  it('フォーム入力をしたら入力値が表示される', async () => {
    render(<Sample />)
    const sampleInput = screen.getByTestId('sampleInput')
    const inputData = screen.getByTestId('inputData')

    /**
     * inputフォームに入力する
     * ※ act内で記述することによってイベント後のrenderingが終了するまでその後の処理を待つことができる
     */
    const sampleInputValue = 'sample'
    await act(async () => {
      fireEvent.input(sampleInput, { target: { value: sampleInputValue } })
    })

    expect(sampleInput).toHaveValue(sampleInputValue)
    expect(inputData).toHaveTextContent(sampleInputValue)
  })

  it('Sample API を呼び出してテーブル表示する', async () => {
    // APIのメソッドをmock化してテスト用の値を返却するようにする
    const mockedSampleApi = vi.spyOn(sampleRepository, 'get').mockResolvedValue(mockedSampleData)

    render(<Sample />)
    const getSampleButton = screen.getByTestId('getSampleButton')

    // buttonを押下する
    await act(async () => {
      fireEvent.click(getSampleButton)
    })

    // APIが期待した引数で呼ばれているかチェック
    expect(mockedSampleApi).toHaveBeenCalledWith(API_URL.SAMPLE.GET, {
      arg: {
        param: 'sample',
      },
    })
    expect(getSampleButton).not.toBeInTheDocument()
    for (const data of mockedSampleData.data) {
      const sample = screen.getByTestId(`sample-${data}`)
      expect(sample).toHaveTextContent(data)
    }
  })

  it('Sample API がエラーの場合', async () => {
    // APIのメソッドをmock化してテスト用のエラーを返却するようにする
    const mockedSampleApi = vi.spyOn(sampleRepository, 'get').mockRejectedValue({
      name: API_ERROR,
      status: HTTP_STATUS.BAD_REQUEST,
      serverErrorContent: {
        message: 'サーバーエラー',
      },
    })
    // 以下はエラー発生時に呼ばれるuseApiErrorの中身をmock化している
    const mockedUseApiError = vi.fn()
    vi.spyOn(hooks, 'useApiError').mockImplementation(() => {
      return {
        notifyError: mockedUseApiError,
      }
    })

    render(<Sample />)
    const getSampleButton = screen.getByTestId('getSampleButton')

    // buttonを押下する
    await act(async () => {
      fireEvent.click(getSampleButton)
    })

    expect(mockedSampleApi).toHaveBeenCalledWith(API_URL.SAMPLE.GET, {
      arg: {
        param: 'sample',
      },
    })
    // エラー時にmock化したメソッドが呼ばれているかチェック
    expect(mockedUseApiError).toHaveBeenLastCalledWith({
      name: API_ERROR,
      status: HTTP_STATUS.BAD_REQUEST,
      serverErrorContent: {
        message: 'サーバーエラー',
      },
    })
  })
})
