import useSWR from 'swr'

export const useAppSWR = <T>(
  Key: Parameters<typeof useSWR>[0],
  fetcher: Parameters<typeof useSWR<T>>[1],
  config?: Parameters<typeof useSWR<T>>[2],
) => {
  const swr = useSWR(Key, fetcher, {
    // @see: https://swr.vercel.app/ja/docs/options#%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3
    ...config,
  })

  return swr
}
