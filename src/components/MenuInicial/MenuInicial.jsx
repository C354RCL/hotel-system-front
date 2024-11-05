import Navbar from '../Navbar/Navbar.jsx'
import PropTypes from 'prop-types'
import InicioAdmin from '../Admin/InicioAdmin.jsx'	
import HistorialReservas from '../Admin/HistorialReservas.jsx'
import HistorialClientesReserva from '../Admin/HistorialClientesReserva.jsx'
import Graficas from '../Admin/graficas.jsx'
import NuevoServicio from '../User/NuevoServicio.jsx'
import FormularioHoras from '../User/FormularioHoras.jsx'
import FormularioNoche from '../User/FormularioNoche.jsx'

function MenuInicial({isAdmin}) {
  return (
    <div className='text-center h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1 overflow-y-auto'>
        { isAdmin ?  < Graficas /> : <FormularioNoche /> }
      </div>
    </div>
  )
}
MenuInicial.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

export default MenuInicial