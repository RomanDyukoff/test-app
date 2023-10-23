import { Route, Routes } from 'react-router-dom'
import { VideoPage } from './pages/VideoPage/VideoPage'
import { ROUTES } from './constants/constants'

import './App.css'

export const App = (): JSX.Element => {

  return (
    <Routes>
      <Route path={ROUTES.VIDEOPAGE} element={<VideoPage />} />
    </Routes>
  )
}
