import React, { useEffect, useState } from 'react'
import TablaReserva from './components/TablaReserva.jsx'

let reservaciones = [{
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
  fechaReserva: '2021-05-02',
  horaEntrada: '08:00',
  horaSalida: '12:00',
  recepcionista: 'Pedro',
  precio: 100
}]

const HistorialReservas = () => {
  const [reservacionesData, setReservacionesData] = useState([]);
  useEffect(() => {
    // Creamos una funcion asincrona 
    const fetchData = async () => {
      try{
        // Peticion a la API
        const res = await fetch("http;",
          {
            method: "GET",
            headers : {"Content-Type": "application/json"}
          }
        )

        // Convertimos la respuesta en formato JSON
        const data =  reservaciones;
        setReservacionesData(data);
      } catch (err) {
        console.error("Error: ", err);
      }
    }
    fetchData();
  })
  return (
    <div className='p-10 w-full place-content-center'>
      <h1 className='text-3xl'>Historial de reservas</h1>
      <div>
        <form action="" className='p-5'>
          <label htmlFor='nombre' className='p-5'>Nombre</label>
          <input type='text' name='nombre' id='nombre' className='m-5 p-2 bg-inherit border-b border-fuchsia-950 dark:border-teal-50' />
          <label htmlFor='fecha' className='p-5'>Fecha</label>
          <input type='date' name='fecha' id='fecha' className='m-5 p-2 dark:bg-teal-700 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
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
      <TablaReserva reservaciones={reservacionesData} />
    </div>
  )
}

export default HistorialReservas