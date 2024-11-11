import React from 'react'
import FormRow from './FormRow.jsx'

const FormularioHoras = () => {
  return (
    <div className='p-10 w-full place-content-center'>
        <h1 className='text-3xl'>Servicio por 4 horas</h1>
        <form className='p-5 block justify-center'>
          <FormRow>
          <div className='flex flex-col w-1/3'>
              <label htmlFor='noHabitacion' className='px-5'>
                Número de habitación
              </label>
              <input type='text' id='noHabitacion' className='mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
            </div>
            <div className='flex flex-col w-1/3'>
            <label htmlFor='tipoDeHabitacion' className='px-5'>
              Tipo de habitación
            </label>
            <select id='tipoDeHabitacion' className='mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none'>
              <option value='1'>1 habitación</option>
              <option value='2'>2 habitaciones</option>
              <option value='3'>3 habitaciones</option>
              <option value='4'>4 habitaciones</option>
              <option value='5'>5 habitaciones</option>
            </select>
            </div>
          </FormRow>
          <FormRow>
            <div className='flex flex-col w-1/3'>
            <label htmlFor='diaDeEntrada' className='px-5'>
                Dia de entrada
              </label>
              <input type='date' id='diaDeEntrada' className='mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
            </div>
            <div className='flex flex-col w-1/3'>
              <label htmlFor='horaDeEntrada' className='px-5'>
                Hora de entrada
              </label>
              <input type='time' id='horaDeEntrada' className='mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
            </div>
          </FormRow>
          <FormRow>
            <div className='flex flex-col w-1/3'>
              <label htmlFor='horaDeSalida' className='px-5'>
                Hora de salida
              </label>
              <input type='time' id='horaDeSalida' className='mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
            </div>
            <div className='flex flex-col w-1/3'>
              <label htmlFor='vehiculo' className='px-5'>
                Vehiculo
              </label>
              <input type='text' id='vehiculo' className='mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
            </div>
          </FormRow>
          <FormRow>
            <div className='flex flex-col w-1/3'>
              <label htmlFor='recepcionista' className='px-5'>
                Recepcionista
              </label>
              <input type='text' id='recepcionista' className='mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
            </div>
            <div className='flex flex-col w-1/3'>
              <label htmlFor='total' className='px-5'>
                Total
              </label>
              <input type='number' id='total' className='mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none' />
            </div>
          </FormRow>
          <FormRow>
          <button type='reset' className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 m-6 rounded-lg'>Borrar</button>
          <button type='submit' className='bg-teal-700 hover:bg-teal-950 text-white font-bold py-2 px-4 m-6 rounded-lg'>Agregar</button>
          </FormRow>
          
        </form>
    </div>
  )
}

export default FormularioHoras