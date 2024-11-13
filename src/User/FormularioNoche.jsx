import React, { useState } from "react";
import FormRow from "./FormRow.jsx";

const FormularioNoche = () => {
  // Se inicializan las varaivbles como cadenas vacias
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [noHabitacion, setNoHabitacion] = useState("");
  const [tipoHabitacion, setTipoHabitacion] = useState("");
  const [diaEntrada, setDiaEntrada] = useState("");
  const [diaSalida, setDiaSalida] = useState("");
  const [recepcionista, setRecepcionista] = useState("");
  const [total, setTotal] = useState("");

  //Manejadores de eventos
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const handleNoHabitacion = (e) => {
    setNoHabitacion(e.target.value);
  };
  const handleTipoHabitacion = (e) => {
    setTipoHabitacion(e.target.value);
  };
  const handleDiaEntrada = (e) => {
    setDiaEntrada(e.target.value);
  };
  const handleDiaSalida = (e) => {
    setDiaSalida(e.target.value);
  };
  const handleRecepcionista = (e) => {
    setRecepcionista(e.target.value);
  };
  const handleTotal = (e) => {
    setTotal(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http;//localhost:30", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({nombre, telefono, noHabitacion, tipoHabitacion, diaEntrada, diaSalida, recepcionista, total})
      });

      console.log(JSON.stringify({nombre, telefono, noHabitacion, tipoHabitacion, diaEntrada, diaSalida, recepcionista, total}));

      //La respuesta del servidor la convertimos a JSON
      const data = {code : 300};

      if(data.code === 200){
        alert("Servicio registrado correctamente")
      } else {
        alert("Ocurrio un error, intentelo nuevamente");
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  return (
    <div className="p-10 w-full place-content-center">
      <h1 className="text-3xl text-center">Servicio por Noches</h1>
      <form className="p-5 block justify-center">
        <FormRow>
          <div className="flex flex-col w-1/3">
            <label htmlFor="nombre" className="px-5">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombre}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="telefono" className="px-5">
              Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              value={telefono}
              onChange={handleTelefono}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
            />
          </div>
        </FormRow>
        <FormRow>
          <div className="flex flex-col w-1/3">
            <label htmlFor="noHabitacion" className="px-5">
              Número de habitación
            </label>
            <input
              type="text"
              id="noHabitacion"
              value={noHabitacion}
              onChange={handleNoHabitacion}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="tipoDeHabitacion" className="px-5">
              Tipo de habitación
            </label>
            <select
              id="tipoDeHabitacion"
              value={tipoHabitacion}
              onChange={handleTipoHabitacion}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
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
              value={diaEntrada}
              onChange={handleDiaEntrada}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="diaDeSalida" className="px-5">
              Dia de salida
            </label>
            <input
              type="date"
              id="diaDeSalida"
              value={diaSalida}
              onChange={handleDiaSalida}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
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
              value={recepcionista}
              onChange={handleRecepcionista}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="total" className="px-5">
              Total
            </label>
            <input
              type="number"
              id="total"
              value={total}
              onChange={handleTotal}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
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
            onClick={handelSubmit}
            className="bg-teal-700 hover:bg-teal-950 text-white font-bold py-2 px-4 m-6 rounded-lg"
          >
            Agregar
          </button>
        </FormRow>
      </form>
    </div>
  );
};

export default FormularioNoche;
