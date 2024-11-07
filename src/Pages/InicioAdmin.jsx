import React from 'react'
import InfoCard from './components/InfoCard.jsx'
import InfoDinero from './components/InfoDinero.jsx'

var servicioPorHoras = 40;
var servioPorNoche = 15;
var generadosPorHoras = 6000;
var generadosPorNoche = 5400;

const InicioAdmin = ()=> {
  return (
    <div className='p-10 w-full h-full place-content-center'>
      <div className='w-5/6 m-auto'>
        <h1 className='text-4xl'>Estadisticas de este mes</h1>
        <div className='flex justify-between p-10 my-5'>
          <h1 className='text-2xl my-auto'>Horas</h1>
          <InfoCard num={servicioPorHoras} title='Servicios realizados por horas'/>
          <InfoDinero num={generadosPorHoras} title='Generados por horas' />
        </div>
        <div className='flex justify-between p-10 my-5'>
          <h1 className='text-2xl my-auto'>Noches</h1>
          <InfoCard num={servioPorNoche} title='Servicios realizados por noche' />
          <InfoDinero num={generadosPorNoche} title='Generados por noche' />
        </div>
      </div>
    </div>
  )
}

export default InicioAdmin