const PREFIX = '/api/v1'

const API_ENDPOINT = {
  SAMPLE: 'sample',
} as const

export const API_URL = {
  SAMPLE: {
    GET: `${PREFIX}/${API_ENDPOINT.SAMPLE}`,
  },
}
