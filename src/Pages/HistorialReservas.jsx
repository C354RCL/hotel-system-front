import React, { useEffect, useState } from 'react'
import TablaReserva from './components/TablaReserva.jsx'


const HistorialReservas = () => {
  const [reservacionesData, setReservacionesData] = useState([]);
  useEffect(() => {
    // Creamos una funcion asincrona 
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:9292/findAll/reservationHours', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
    
        const data = await res.json();
        setReservacionesData(data);
      } catch (err) {
        console.error('Error al obtener los datos:', err.message);
        alert('No se pudo conectar con el servidor. Por favor, intenta más tarde.');
      }
    };
    fetchData();
  }, [])
  return (
    <div className='p-10 w-full place-content-center'>
      <h1 className='text-3xl'>Historial de reservas</h1>
      <div>
        <form action="" className='p-5'>
          <label htmlFor='nombre' className='p-5'>Recepcionista</label>
          <input type='text' name='nombre' id='nombre' className='m-5 p-2 bg-inherit border-b border-fuchsia-950 dark:border-teal-50' />
          <label htmlFor='fecha' className='p-5'>Fecha</label>
          <input type='date' name='fecha' id='fecha' className='m-5 p-2 dark:bg-teal-700 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
          <label htmlFor='tipo' className='p-5'>Tipo de habitacion</label>
          <select name='tipo' id='tipo' className='m-5 p-2 bg-inherit border border-fuchsia-950 dark:border-teal-50 focus:outline-none'>
          <option value='' className='dark:bg-teal-700'>Cualquier</option>
            <option value='Matrimonial' className='dark:bg-teal-700'>Matrimonial</option>
            <option value='King Size' className='dark:bg-teal-700'>King Size</option>
            <option value='Doble' className='dark:bg-teal-700'>Doble</option>
          </select>
          <button type='submit' className='p-2 bg-teal-700 text-white'>Buscar</button>
        </form>
      </div>
      <TablaReserva reservaciones={reservacionesData} />
    </div>
  )
}

export default HistorialReservas