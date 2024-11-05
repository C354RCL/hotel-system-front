import React from 'react'
import PropTypes from 'prop-types'

function TablaReserva({ reservaciones }) {
  return (
    <div className='p-10 wfull place-content-center'>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-teal-700 uppercase bg-emerald-50 dark:bg-teal-700 dark:text-emerald-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              No. Habitacion
            </th>
            <th scope='col' className='px-6 py-3'>
              Tipo de Habitacion
            </th>
            <th scope='col' className='px-6 py-3'>
              Fecha de Reserva
            </th>
            <th scope='col' className='px-6 py-3'>
              Hora de Entrada
            </th>
            <th scope='col' className='px-6 py-3'>
              Hora de Salida
            </th>
            <th scope='col' className='px-6 py-3'>
              Recepcionista
            </th>
            <th scope='col' className='px-6 py-3'>
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          {reservaciones.map((reservacion, index) => (
            <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td>{reservacion.noHabitacion}</td>
              <td>{reservacion.tipoHabitacion}</td>
              <td>{reservacion.fechaReserva}</td>
              <td>{reservacion.horaEntrada}</td>
              <td>{reservacion.horaSalida}</td>
              <td>{reservacion.recepcionista}</td>
              <td>{reservacion.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

TablaReserva.propTypes = {
  reservaciones: PropTypes.arrayOf(
    PropTypes.shape({
      noHabitacion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      tipoHabitacion: PropTypes.string.isRequired,
      fechaReserva: PropTypes.string.isRequired,
      horaEntrada: PropTypes.string.isRequired,
      horaSalida: PropTypes.string.isRequired,
      recepcionista: PropTypes.string.isRequired,
      precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
}

TablaReserva.defaultProps = {
  reservaciones: []
}

export default TablaReserva