import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx'
import Login from './Pages/Login.jsx'
import MenuInicial from './Pages/MenuInicial.jsx'
import HistorialReservas from './Pages/HistorialReservas.jsx'
import HistorialClientesReserva from './Pages/HistorialClientesReserva.jsx'
import Graficas from './Pages/Admin/Graficas.jsx'
import NuevoServicio from './User/NuevoServicio.jsx'
import FormularioHoras from './User/FormularioHoras.jsx'
import FormularioNoche from './User/FormularioNoche.jsx'
import InicioAdmin from './Pages/Admin/InicioAdmin.jsx'
import Historiales from './Pages/Historiales.jsx'
import Habitaciones from './Pages/Habitaciones.jsx'


const isAdmin = false;
const isLogged = false;

const router = createBrowserRouter(
  createRoutesFromElements( 
  <Route path='/' element={<MainLayout />}>
     <Route index element={<MenuInicial isAdmin={isAdmin} /> } />
     <Route path = '/login' element = { < Login /> }  />
     <Route path='/admin/graficas' element={<Graficas />} />
     <Route path='/admin/inicio' element={<InicioAdmin />} />
     <Route path='/nuevo' element={<NuevoServicio />} />
     <Route path='/nuevo/horas' element={<FormularioHoras />} />
     <Route path='/nuevo/noches' element={<FormularioNoche />} />
     <Route path='/historial/reservas' element={<HistorialReservas />} />
     <Route path='/historial/clientes' element={<HistorialClientesReserva />} />
     <Route path='/historiales' element={<Historiales />} />
     <Route path='/habitaciones' element={<Habitaciones />} />
  </Route>
 
)
);




const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App