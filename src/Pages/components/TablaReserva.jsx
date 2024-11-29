import React from 'react';
import PropTypes from 'prop-types';

const TablaReserva = ({ reservaciones = [] }) => {
  return (
    <div className='p-10 w-full place-content-center'>
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-teal-700 uppercase bg-emerald-50 dark:bg-teal-700 dark:text-emerald-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>No. Habitacion</th>
            <th scope='col' className='px-6 py-3'>Tipo de Habitacion</th>
            <th scope='col' className='px-6 py-3'>Fecha</th>
            <th scope='col' className='px-6 py-3'>Hora de Entrada</th>
            <th scope='col' className='px-6 py-3'>Hora de Salida</th>
            <th scope='col' className='px-6 py-3'>Recepcionista</th>
            <th scope='col' className='px-6 py-3'>Precio</th>
          </tr>
        </thead>
        <tbody>
          {reservaciones.map((reservacion, index) => (
            <tr key={index} className='text-centerbg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td>{reservacion.roomNumber}</td>
              <td>{reservacion.roomType}</td>
              <td>{reservacion.date}</td>
              <td>{reservacion.enterHour}</td>
              <td>{reservacion.exitHour}</td>
              <td>{reservacion.firstName}</td>
              <td>{reservacion.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TablaReserva.propTypes = {
  reservaciones: PropTypes.arrayOf(
    PropTypes.shape({
      idRoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      roomType: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      enterHour: PropTypes.string.isRequired,
      exitHour: PropTypes.string.isRequired,
      idUser: PropTypes.string.isRequired,
      totalCost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

export default TablaReserva;
