import React from 'react'
import { Link } from 'react-router-dom';
import reloj from '../assets/img/reloj.png'
import cama from '../assets//img/cama.png'
import historal from '../assets//img/historial.png'

function NuevoServicio() {
  return (
    <div className='p-10 w-full place-content-center'>
        <h1 className='text-3xl'>Computar nuevo servicio</h1>
        <div className='flex justify-center'>
          <Link to='/nuevo/horas' className='bg-teal-700 hover:bg-teal-950 text-white font-bold py-2 px-4 m-6 rounded-lg'>
              <img src={reloj} alt='Por horas' className='w-1/2 m-auto p-2' />
              <h1 className='text-center text-2xl'>Por horas</h1>
          </Link>
          <Link to='/nuevo/noches' className='bg-teal-200 hover:bg-teal-500 text-teal-700 font-bold py-2 px-4 m-6 rounded-lg'>
            <img src={cama} alt='Por noches' className='w-1/2 m-auto p-2' />
            <h1 className='text-center text-2xl'>Por noches</h1>
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link href='#' className='bg-teal-700 hover:bg-teal-950 text-white font-bold py-2 px-4 m-6 rounded-lg'>
            <img src={historal} alt='Historial' className='w-1/2 m-auto p-2' />
            <h1 className='text-center text-2xl'>Historal</h1>
          </Link>
        </div>
    </div>
  )
}

export default NuevoServicio