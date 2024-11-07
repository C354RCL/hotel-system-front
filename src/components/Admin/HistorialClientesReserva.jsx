import React from 'react'
import TablaClientesReserva from './TablaClientesReserva'

var reservaciones = [{
  nombreCliente: 'Juan',
  numTelefono: '12345678',
  habitacion: '3',
  diaLlegada: '2021-05-01',
  diaSalida: '2021-05-02',
  recepcionista: 'Juan',  
  total: 100
},
{
  nombreCliente: 'Pedro',
  numTelefono: '12345678',
  habitacion: '2',
  diaLlegada: '2021-05-02',
  diaSalida: '2021-05-03',
  recepcionista: 'Pedro',  
  total: 100
},
{
  nombreCliente: 'Juan',
  numTelefono: '12345678',
  habitacion: '1',
  diaLlegada: '2021-05-03',
  diaSalida: '2021-05-04',
  recepcionista: 'Juan',  
  total: 100
}
]

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
      <TablaClientesReserva reservaciones={ reservaciones } />
    </div>
  )
}

export default HistorialReservas