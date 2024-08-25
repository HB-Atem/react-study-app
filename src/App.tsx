import * as mock from '@/repositories/mocks'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { APP_URL } from './enum'
import { Sample } from './pages'

if (import.meta.env.VITE_API_MOCKING === 'enabled') {
  mock.start()
}

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={APP_URL.SAMPLE} element={<Sample />} />
          <Route path="*" element={<Navigate to={APP_URL.SAMPLE} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
