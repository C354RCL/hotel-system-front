import PropTypes from 'prop-types';

function TablaHabitaciones({ habitaciones = [] }) {
  return (
    <div className='p-10 w-full place-content-center'>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-teal-700 uppercase bg-emerald-50 dark:bg-teal-700 dark:text-emerald-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>Numero de habitación</th>
            <th scope='col' className='px-6 py-3'>Tipo de habitación</th>
            <th scope='col' className='px-6 py-3'>Descripción</th>
            <th scope='col' className='px-6 py-3'>Jacuzzi</th>
            <th scope='col' className='px-6 py-3'>Personas</th>
            <th scope='col' className='px-6 py-3'>Estado</th>
            <th scope='col' className='px-6 py-3'>Último día de mantenimiento</th>
          </tr>
        </thead>
        <tbody>
          {habitaciones.map((habitacion, index) => (
            <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td>{habitacion.roomNumber}</td>
              <td>{habitacion.roomType}</td>
              <td>{habitacion.description}</td>
              <td>{habitacion.Jacuzzi ? 'Si' : 'No'}</td>
              <td>{habitacion.numPersons}</td>
              <td>{habitacion.status}</td>
              <td>{habitacion.lastMaintenanceDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TablaHabitaciones.propTypes = {
  habitaciones: PropTypes.arrayOf(
    PropTypes.shape({
      roomNumber: PropTypes.string.isRequired,
      roomType: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Jacuzzi: PropTypes.bool.isRequired,
      numPersons: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      lastMaintenanceDay: PropTypes.string.isRequired,
    })
  ),
};

export default TablaHabitaciones;
