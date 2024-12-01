import InfoCard from '../components/InfoCard.jsx';
import InfoDinero from '../components/InfoDinero.jsx';
import React, { useEffect, useState } from 'react';

const InicioAdmin = () => {
  const [totalHoras, setTotalHoras] = useState({ servicios: 0, ventas: 0 });
  const [totalNoches, setTotalNoches] = useState({ servicios: 0, ventas: 0 });

  useEffect(() => {
  const fetchData = async () => {
    try {
      const resHoras = await fetch('http://localhost:9292/findAll/reservationHours', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const resNoches = await fetch('http://localhost:9292/findAll/reservationNights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const dataHoras = await resHoras.json();
      const dataNoches = await resNoches.json();

      // Obtener mes actual basado en la hora local
      const ahora = new Date();
      const mesActual = ahora.getMonth();
      const zonaHorariaMexico = -6; // Hora estándar del centro de México (UTC-6)

      // Procesar servicios y ventas por horas
      const horasDelMes = dataHoras.filter((reserva) => {
        const fecha = new Date(reserva.date);
        fecha.setHours(fecha.getHours() + zonaHorariaMexico); // Ajustar al huso horario de México
        return !isNaN(fecha) && fecha.getMonth() === mesActual;
      });

      const totalServiciosHoras = horasDelMes.length;
      const totalVentasHoras = horasDelMes.reduce((acc, curr) => acc + (curr.totalCost || 0), 0);

      setTotalHoras({
        servicios: totalServiciosHoras,
        ventas: totalVentasHoras,
      });

      // Procesar servicios y ventas por noches
      const nochesDelMes = dataNoches.filter((reserva) => {
        const fechaArrive = new Date(reserva.arriveDay);
        fechaArrive.setHours(fechaArrive.getHours() + zonaHorariaMexico); // Ajustar al huso horario de México
        return !isNaN(fechaArrive) && fechaArrive.getMonth() === mesActual;
      });

      const totalServiciosNoches = nochesDelMes.length;
      const totalVentasNoches = nochesDelMes.reduce((acc, curr) => acc + (curr.totalCost || 0), 0);

      setTotalNoches({
        servicios: totalServiciosNoches,
        ventas: totalVentasNoches,
      });

    } catch (err) {
      console.error('Error al obtener los datos:', err);
    }
  };

  fetchData();
  }, []);


  return (
    <div className="p-10 w-full h-full place-content-center">
      <div className="w-5/6 m-auto">
        <h1 className="text-4xl">Estadísticas de este mes</h1>
        {(totalHoras.servicios > 0 || totalNoches.servicios > 0) ? (
          <>
            <div className="flex justify-between p-10 my-5">
              <h1 className="text-2xl my-auto">Horas</h1>
              <InfoCard
                num={totalHoras.servicios}
                title="Servicios realizados por horas"
              />
              <InfoDinero
                num={totalHoras.ventas.toFixed(2)}
                title="Generados por horas"
              />
            </div>
            <div className="flex justify-between p-10 my-5">
              <h1 className="text-2xl my-auto">Noches</h1>
              <InfoCard
                num={totalNoches.servicios}
                title="Servicios realizados por noche"
              />
              <InfoDinero
                num={totalNoches.ventas.toFixed(2)}
                title="Generados por noche"
              />
            </div>
          </>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
};

export default InicioAdmin;
