import React, { useState } from "react";
import FormRow from "./FormRow.jsx";

const FormularioHoras = () => {
  // Se inicializan variables como cadenas vacias
  const [noHabitacion, setnoHabitacion] = useState("");
  const [tipoHabitacion, setTipoHabitacion] = useState("");
  const [diaEntrada, setDiaEntrada] = useState("");
  const [horaEntrada, setHoraEntrada] = useState("");
  const [horaSalida, setHoraSalida] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [recepcionista, setRecepcionista] = useState("");
  const [total, setTotal] = useState("");

  //Manejadores de eventos
  const handleNoHabitacion = (e) => {
    setnoHabitacion(e.target.value);
  };
  const handletipoHabitacion = (e) => {
    setTipoHabitacion(e.target.value);
  };
  const handleDiaEntrada = (e) => {
    setDiaEntrada(e.target.value);
  };
  const handleHoraEntrada = (e) => {
    setHoraEntrada(e.target.value);
  };
  const handleHoraSalida = (e) => {
    setHoraSalida(e.target.value);
  };
  const handlVehiculo = (e) => {
    setVehiculo(e.target.value);
  };
  const handleRecepcionista = (e) => {
    setRecepcionista(e.target.value);
  };
  const handleTotal = (e) => {
    setTotal(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try{
      // Creamos la peticion a la API 
      const res = await fetch("http://localhost:300", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        // Convertimos a JSON los valores 
        body: JSON.stringify({noHabitacion, tipoHabitacion, diaEntrada, horaEntrada, horaSalida, vehiculo, recepcionista, total})
      })
      console.log(JSON.stringify({noHabitacion, tipoHabitacion, diaEntrada, horaEntrada, horaSalida, vehiculo, recepcionista, total}));

      // La respuesta del servidor la convertimos a JSON 
      const data = await res.json();

      if(data.code === 200){
        alert("Servicio registrado correctamente")
      } else {
        alert("Ocurrio un error, intentelo nuevamente");
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  }

  return (
    <div className="p-10 w-full place-content-center">
      <h1 className="text-3xl">Servicio por 4 horas</h1>
      <form className="p-5 block justify-center">
        <FormRow>
          <div className="flex flex-col w-1/3">
            <label htmlFor="noHabitacion" className="px-5">
              Número de habitación
            </label>
            <input
              type="text"
              id="noHabitacion"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={noHabitacion}
              onChange={handleNoHabitacion}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="tipoDeHabitacion" className="px-5">
              Tipo de habitación
            </label>
            <select
              id="tipoDeHabitacion"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={tipoHabitacion}
              onChange={handletipoHabitacion}
            >
              <option value="Matrimonial">Matrimonial</option>
              <option value="King Size">King Size</option>
              <option value="Doble">Doble</option>
            </select>
          </div>
        </FormRow>
        <FormRow>
          <div className="flex flex-col w-1/3">
            <label htmlFor="diaDeEntrada" className="px-5">
              Dia de entrada
            </label>
            <input
              type="date"
              id="diaDeEntrada"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={diaEntrada}
              onChange={handleDiaEntrada}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="horaDeEntrada" className="px-5">
              Hora de entrada
            </label>
            <input
              type="time"
              id="horaDeEntrada"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={horaEntrada}
              onChange={handleHoraEntrada}
            />
          </div>
        </FormRow>
        <FormRow>
          <div className="flex flex-col w-1/3">
            <label htmlFor="horaDeSalida" className="px-5">
              Hora de salida
            </label>
            <input
              type="time"
              id="horaDeSalida"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={horaSalida}
              onChange={handleHoraSalida}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="vehiculo" className="px-5">
              Vehiculo
            </label>
            <input
              type="text"
              id="vehiculo"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={vehiculo}
              onChange={handlVehiculo}
            />
          </div>
        </FormRow>
        <FormRow>
          <div className="flex flex-col w-1/3">
            <label htmlFor="recepcionista" className="px-5">
              Recepcionista
            </label>
            <input
              type="text"
              id="recepcionista"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={recepcionista}
              onChange={handleRecepcionista}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="total" className="px-5">
              Total
            </label>
            <input
              type="number"
              id="total"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={total}
              onChange={handleTotal}
            />
          </div>
        </FormRow>
        <FormRow>
          <button
            type="reset"
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 m-6 rounded-lg"
          >
            Borrar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-teal-700 hover:bg-teal-950 text-white font-bold py-2 px-4 m-6 rounded-lg"
          >
            Agregar
          </button>
        </FormRow>
      </form>
    </div>
  );
};

export default FormularioHoras;
