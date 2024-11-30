import PropTypes from 'prop-types';

function TablaClientesReserva({ reservaciones = [] }) {
  return (
    <div className='p-10 w-full place-content-center'>
      <table className="w-full text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-teal-700 uppercase bg-emerald-50 dark:bg-teal-700 dark:text-emerald-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>Nombre Cliente</th>
            <th scope='col' className='px-6 py-3'>Número de Telefono</th>
            <th scope='col' className='px-6 py-3'>Habitación</th>
            <th scope='col' className='px-6 py-3'>Tipo Habitación</th>
            <th scope='col' className='px-6 py-3'>Día llegada</th>
            <th scope='col' className='px-6 py-3'>Día salida</th>
            <th scope='col' className='px-6 py-3'>Recepcionista</th>
            <th scope='col' className='px-6 py-3'>Total</th>
          </tr>
        </thead>
        <tbody>
          {reservaciones.map((reservacion, index) => (
            <tr key={index} className='text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td >{reservacion.customerName}</td>
              <td >{reservacion.telephoneNumber}</td>
              <td >{reservacion.roomNumber}</td>
              <td >{reservacion.roomType}</td>
              <td >{reservacion.arriveDay}</td>
              <td >{reservacion.departureDay}</td>
              <td >{reservacion.firstName}</td>
              <td >{reservacion.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TablaClientesReserva.propTypes = {
  reservaciones: PropTypes.arrayOf(
    PropTypes.shape({
      customerName: PropTypes.string.isRequired,
      telephoneNumber: PropTypes.string.isRequired,
      roomNumber: PropTypes.string.isRequired,
      arriveDay: PropTypes.string.isRequired,
      departureDay: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      totalCost: PropTypes.number.isRequired,
    })
  ),
};

export default TablaClientesReserva;
