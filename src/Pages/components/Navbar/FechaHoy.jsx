import React from 'react';

function FechaHoy() {
  const hoy = new Date();
  const fechaFormateada = hoy.toLocaleDateString('es-ES', {
    weekday: 'long', // muestra el día de la semana
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div>
      <h1 className='text-2xl'>{fechaFormateada}</h1>
    </div>
  );
}

export default FechaHoy;