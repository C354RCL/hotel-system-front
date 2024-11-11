import TablaHabitaciones from "./components/TablaHabitaciones.jsx"

var habitaciones = [{
  roomNumber: '1',
  roomType: 'King Size',
  description: 'King Size',
  Jacuzzi: true,
  numPersons: '2',
  status: 'Inactivo',
  lastMaintenanceDay: '2021-05-01'
},
{
  roomNumber: '2',
  roomType: 'King Size',
  description: 'King Size',
  Jacuzzi: true,
  numPersons: '2',
  status: 'Inactivo',
  lastMaintenanceDay: '2021-05-02'
},
{
  roomNumber: '3',
  roomType: 'King Size',
  description: 'King Size',
  Jacuzzi: true,
  numPersons: '2',
  status: 'Inactivo',
  lastMaintenanceDay: '2021-05-03'
},]

const Habitaciones = () => {
  return (
    <div className='p-10 w-full place-content-center text-center'>
      <h1 className='text-3xl'>Habitaciones</h1>
      <div>
        <form action="" className='p-5'>
          <label htmlFor='roomNumber' className='p-5'>Numero de habitación</label>
          <input type='number' name='roomNumber' id='roomNumber' className='m-5 p-2 bg-inherit border-b border-fuchsia-950 dark:border-teal-50' />
          <label htmlFor='lastMaintenanceDay' className='p-5'>Fecha</label>
          <input type='date' name='lastMaintenanceDay' id='lastMaintenanceDay' className='m-5 p-2 dark:bg-teal-700 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
          <label htmlFor='status' className='p-5'>Estado</label>
          <select name='status' id='status' className='m-5 p-2 bg-inherit border border-fuchsia-950 dark:border-teal-50 focus:outline-none'>
          <option value='' className='dark:bg-teal-700'>Cualquier</option>
            <option value='activo' className='dark:bg-teal-700'>Activo</option>
            <option value='inactivo' className='dark:bg-teal-700'>Inactivo</option>
          </select>
          <label htmlFor='tipo' className='p-5'>Tipo de habitacion</label>
          <select name='tipo' id='tipo' className='m-5 p-2 bg-inherit border border-fuchsia-950 dark:border-teal-50 focus:outline-none'>
          <option value='' className='dark:bg-teal-700'>Cualquier</option>
            <option value='cuarto' className='dark:bg-teal-700'>Cuarto</option>
            <option value='piso' className='dark:bg-teal-700'>Piso</option>
            <option value='banio' className='dark:bg-teal-700'>Banio</option>
          </select>
          <button type='submit' className='p-2 bg-teal-700 text-white'>Buscar</button>
        </form>
      </div>
      <TablaHabitaciones habitaciones={ habitaciones } />
    </div>
  )
}

export default Habitaciones
