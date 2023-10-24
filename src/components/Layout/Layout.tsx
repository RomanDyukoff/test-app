import { Outlet } from 'react-router-dom';

import './style.css';

export const Layout = () => {
  return (
    <main className='container'>
        <Outlet />
    </main>
  )
}
