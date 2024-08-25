import { overlay, spinner } from './Loader.css'

export const Loader = () => {
  return (
    <div className={overlay}>
      <div className={spinner} />
    </div>
  )
}
