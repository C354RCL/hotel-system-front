import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/components/Navbar/Navbar.jsx';

const MainLayout = () => {
  const location = useLocation();

  // Verifica si la ruta actual es la de login
  const isLoginPage = location.pathname === '/';

  return (
    <div className="min-h-screen dark:bg-slate-800 dark:text-gray-200">
      {/* Solo muestra el Navbar si no estamos en la página de login */}
      {!isLoginPage && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
