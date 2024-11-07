import PropTypes from 'prop-types'
import HistorialReservas from './HistorialReservas.jsx'	
import FormularioNoche from '../User/FormularioNoche.jsx'

function MenuInicial({isAdmin}) {
  return (
    <div className='text-center h-screen flex flex-col dark:bg-gray-900 dark:text-gray-200'>
      <div className='flex-1 overflow-y-auto'>
        <h1> Bienvenido </h1>
      </div>
    </div>
  )
}
MenuInicial.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

export default MenuInicial