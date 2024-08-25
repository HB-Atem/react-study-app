import { worker } from './browser'

export const start = () => {
  if (typeof window !== 'undefined') {
    worker.start()
  }
}
