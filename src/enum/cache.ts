import { API_URL } from '.'

export const CACHE_KEY = {
  STORE_SESSION: 'sessionStore',
  STORE_UI: 'uiStore',
  STORE_ERROR: 'errorStore',
  SAMPLE: {
    GET: API_URL.SAMPLE.GET,
  },
} as const
