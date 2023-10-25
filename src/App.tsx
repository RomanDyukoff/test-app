import { Route, Routes } from 'react-router-dom'
import { VideoPage } from './pages/VideoPage/VideoPage'
import { ROUTES } from './constants/constants'

import './App.css'
import { Layout } from './components/Layout/Layout'
import { PromoPage } from './pages/PromoPage/PromoPage'


export const App = (): JSX.Element => {

  return (
    <Routes>
      <Route path={ROUTES.HOMEPAGE} element={<Layout />}>
        <Route index element={<VideoPage urlVideo="https://youtu.be/M7FIvfx5J10" />} />
        <Route path={ROUTES.PROMOPAGE} element={<PromoPage />} />
      </Route>
    </Routes>
  )
}
