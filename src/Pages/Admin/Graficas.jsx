import BarChart from '../components/BarChart.jsx';
import React, { useEffect, useState } from 'react';

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const App = () => {
  const [cantidadHoras, setCantidadHoras] = useState([]);
  const [cantidadNoches, setCantidadNoches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resHoras = await fetch('http://localhost:9292/findAll/reservationHours', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        const resNoches = await fetch('http://localhost:9292/findAll/reservationNights', {
          method : 'POST', 
          headers : {'Content-Type' : 'application/json'}
        });

        const dataHoras = await resHoras.json();
        const dataNoches = await resNoches.json()

        // Inicializar contadores para cada mes
        const serviciosPorMesHoras = new Array(12).fill(0);
        const serviciosPorMesNoches = new Array(12).fill(0);

        // Procesar los datos
        dataHoras.forEach((reserva) => {
          const fecha = new Date(reserva.date);
          const mes = fecha.getMonth(); // Obtener el índice del mes 
          serviciosPorMesHoras[mes]++;
        });

        dataNoches.forEach(reserva => {
          const fecha = new Date(reserva.arriveDay);
          const mes = fecha.getMonth();
          serviciosPorMesNoches[mes]++;
        })

        // Actualizar el estado con los servicios por mes
        setCantidadHoras(serviciosPorMesHoras);
        setCantidadNoches(serviciosPorMesNoches);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-full p-10'>
      <h1>Gráfico de Ventas</h1>
      {cantidadHoras.length === 0 && (
        <p>Cargando datos de servicios por horas...</p>
      )}
      {cantidadHoras.length > 0 && (
        <div className='w-1/2 h-1/2 rounded-lg flex justify-center'>
          <BarChart labels={meses} datos={cantidadHoras} title='Servicios por horas' />
        </div>
      )}
      {cantidadNoches.length === 0 && (
        <p>Cargando datos de servicios por noche...</p>
      )}
      {cantidadNoches.length > 0 && (
        <div className='w-1/2 h-1/2 rounded-lg flex justify-center'>
          <BarChart labels={meses} datos={cantidadNoches} title='Servicios por noches' color='rgba(188, 226, 229, 1)' />
        </div>
      )}
    </div>
  );
};

export default App;
