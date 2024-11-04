import React from 'react'
import PropTypes from 'prop-types'

function TablaClientesReserva(props) {
  return (
    <div className='p-10 wfull place-content-center'>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-teal-700 uppercase bg-emerald-50 dark:bg-teal-700 dark:text-emerald-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Nombre Cliente
            </th>
            <th scope='col' className='px-6 py-3'>
              Número de Telefono
            </th>
            <th scope='col' className='px-6 py-3'>
              Habitación
            </th>
            <th scope='col' className='px-6 py-3'>
              Día llegada
            </th>
            <th scope='col' className='px-6 py-3'>
              Día salida
            </th>
            <th scope='col' className='px-6 py-3'>
              Recepcionista
            </th>
            <th scope='col' className='px-6 py-3'>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {props.reservaciones.map((reservacion, index) => (
            <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td>{reservacion.nombreCliente}</td>
              <td>{reservacion.numTelefono}</td>
              <td>{reservacion.habitacion}</td>
              <td>{reservacion.diaLlegada}</td>
              <td>{reservacion.diaSalida}</td>
              <td>{reservacion.recepcionista}</td>
              <td>{reservacion.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

TablaClientesReserva.propTypes = {
  reservaciones: PropTypes.arrayOf(
    PropTypes.shape({
      nombreCliente: PropTypes.string.isRequired,
      numTelefono: PropTypes.string.isRequired,
      habitacion: PropTypes.string.isRequired,
      diaLlegada: PropTypes.string.isRequired,
      diaSalida: PropTypes.string.isRequired,
      recepcionista: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
}

TablaClientesReserva.defaultProps = {
  reservaciones: []
}

export default TablaClientesReserva