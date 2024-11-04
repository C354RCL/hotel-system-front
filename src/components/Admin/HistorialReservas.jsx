import React from 'react'
import TablaReserva from './TablaReserva.jsx'

var reservaciones = [{
  noHabitacion: 1,
  tipoHabitacion: 'Cuarto',
  fechaReserva: '2021-05-01',
  horaEntrada: '08:00',
  horaSalida: '12:00',
  recepcionista: 'Juan',
  precio: 100
},
{
  noHabitacion: 2,
  tipoHabitacion: 'Cuarto',
  fechaReserva: '2021-05-02',
  horaEntrada: '08:00',
  horaSalida: '12:00',
  recepcionista: 'Pedro',
  precio: 100
},
{
  noHabitacion: 3,
  tipoHabitacion: 'Cuarto',
  fechaReserva: '2021-05-03',
  horaEntrada: '08:00',
  horaSalida: '12:00',
  recepcionista: 'Juan',
  precio: 100
}]

const HistorialReservas = () => {
  return (
    <div className='p-10 w-full place-content-center'>
      <h1 className='text-3xl'>Historial de reservas</h1>
      <div>
        <form action="" className='p-5'>
          <label htmlFor='nombre' className='p-5'>Nombre</label>
          <input type='text' name='nombre' id='nombre' className='m-5 p-2 bg-inherit border-b border-fuchsia-950 dark:border-teal-50' />
          <label htmlFor='fecha' className='p-5'>Fecha</label>
          <input type='date' name='fecha' id='fecha' className='m-5 p-2 dark:bg-teal-700 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
          <label htmlFor='hora' className='p-5'>Hora de entrada</label>
          <input type='time' name='hora' id='hora' className='m-5 p-2 dark:bg-teal-700 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
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
      <TablaReserva reservaciones={reservaciones} />
    </div>
  )
}

export default HistorialReservas