import { useSWRConfig } from 'swr'

export const useCache = () => {
  const { cache } = useSWRConfig()

  // キャッシュを削除する
  // cacheKey: 削除するキャッシュキーを指定。未指定(or空文字)の場合、すべてのキャッシュを削除
  const clearCache = (cacheKey?: string) =>
    [...cache.keys()].forEach((key) => {
      if (cacheKey) {
        if (key.includes(cacheKey)) {
          cache.delete(key)
        }
      } else {
        cache.delete(key)
      }
    })

  return { clearCache }
}
