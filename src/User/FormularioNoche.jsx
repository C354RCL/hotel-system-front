import React, { useState } from "react";
import FormRow from "./FormRow.jsx";

const FormularioNoche = () => {
  // Se inicializan las varaivbles como cadenas vacias
  const [cutomerName, setNombre] = useState("");
  const [telephoneNumber, setTelefono] = useState("");
  const [arriveDay, setDiaEntrada] = useState("");
  const [departureDay, setDiaSalida] = useState("");
  let [roomNumber, setNoHabitacion] = useState("");
  const idUser = localStorage.getItem('id');

  //Manejadores de eventos
  const handleNombre = (e) => {
    setNombre(e.target.value);
  }

  const handleTelefono = (e) => {
    setTelefono(e.target.value);
  }

  const handleNoHabitacion = (e) => {
    setNoHabitacion(e.target.value);
  }

  const handleDiaEntrada = (e) => {
    setDiaEntrada(e.target.value);
  }

  const handleDiaSalida = (e) => {
    if(arriveDay > e.target.value) {
      alert("Fecha incorrecta, intentelo nuevamente");
      setDiaEntrada("");
      return
    }
    setDiaSalida(e.target.value);
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    // Validacion de que todos los campos esten completos
    if(!cutomerName || !telephoneNumber || !roomNumber || !arriveDay || !departureDay) {
      alert("Todos los datos son obligatorios")
      return
    }

    //Validacion de que el numero de telefono sea correcto
    if(telephoneNumber.length != 10){
      alert('Numero de telefono no valido, intentelo nuevamnete');
      return
    }

    // Declaramos las variables donde se guarda infromacion de la habitacion
    let idRoom;
    let totalCost;
    let roomType;
    let roomNumber;
    let firstName;

    try{
      //Convertimos a tipo JSON el id del usuario
      const userId ={idUser : idUser}
      const resUser = await fetch('http://localhost:9292/find/users', {
        method : 'POST',
        headers : {'Content-Type' : 'applicatiom/json'},
        body : JSON.stringify(userId)
      });
      // Convertimos a JSON la respuesta
      const data = await resUser.json();
      const userData = await data[0];
      firstName = userData.firstName;
    } catch(err) {
      console.error(err);
    }

    try{
      // Convertimos a tipo JSON ell numero de habitacion 
      roomNumber = {roomNumber : roomNumber};
      const resRoom = await fetch('http://localhost:9292/find/rooms',{
        method : 'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify(roomNumber)
      });

      // Convertimos a JSON la respuesta
      const data = await resRoom.json();
      // Obtenemos la informacion de la habitacion y las asignamos a las variables
      const roomData = await data[0];
      idRoom = roomData._id;
      totalCost = roomData.cost;
      roomType = roomData.roomType;
      roomNumber = roomData.roomNumber;
    } catch (err) {
      console.log("Error en POST de habitacion", err);
    }

    try {
      // Creamos la peticion a la API
      const res = await fetch("http://localhost:9292/insert/reservationNights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Convertimos a JSON los valores
        body: JSON.stringify({cutomerName, telephoneNumber, arriveDay, departureDay, totalCost, idRoom, idUser, roomType, firstName, roomNumber})
      });

      // Verificmaos la respuesta del servidor
      if(res.status === 201){
        alert("Servicio registrado correctamente")
      } else {
        alert("Ocurrio un error, intentelo nuevamente");
      }
      return
    } catch (err) {
      console.error("Error: ", err);
    }
  }

  const handleReset = async e => {
    e.preventDefault();
    setNombre('');  
    setTelefono('');      
    setNoHabitacion('');
    setDiaEntrada('');
    setDiaSalida('');
  }
  
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
              value={cutomerName}
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
              value={telephoneNumber}
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
              value={roomNumber}
              onChange={handleNoHabitacion}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-1/3">
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
              value={arriveDay}
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
              value={departureDay}
              onChange={handleDiaSalida}
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
            />
          </div>
        </FormRow>
        <FormRow>
          <div className="flex flex-col w-1/3">
          </div>
          <div className="flex flex-col w-1/3">
          </div>
        </FormRow>
        <FormRow>
          <button
            type="button"
            onClick={handleReset}
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
