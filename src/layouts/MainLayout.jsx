import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/components/Navbar/Navbar.jsx'

const MainLayout = () => {
  return (
    <div className='text-center flex flex-col dark:bg-slate-800 dark:text-gray-200'> 
      <Navbar />
      <Outlet />
  </div>
  )
}

export default MainLayout