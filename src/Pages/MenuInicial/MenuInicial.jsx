import Navbar from '../Navbar/Navbar.js
import PropTypes from 'prop-types'
import InicioAdmin from '../../components/Pages/InicioAdmin.jsx'	
import HistorialReservas from '../Admin/HistorialReservas.js
import HistorialClientesReserva from '../Admin/HistorialClientesReserva.js
import Graficas from '../../components/Pages/graficas.js'
import NuevoServicio from '../User/NuevoServicio.js
import FormularioHoras from '../User/FormularioHoras.js
import FormularioNoche from '../User/FormularioNoche.js

function MenuInicial({isAdmin}) {
  return (
    <div className='text-center h-screen flex flex-col dark:bg-teal-950 dark:text-gray-200'>
      <Navbar />
      <div className='flex-1 overflow-y-auto'>
        { isAdmin ?  < HistorialReservas /> : <FormularioNoche /> }
      </div>
    </div>
  )
}
MenuInicial.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

export default MenuInicial