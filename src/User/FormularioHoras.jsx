import React, { useState } from "react";
import FormRow from "./FormRow.jsx";

const FormularioHoras = () => {
  // Se inicializan variables como cadenas vacias
  let [roomNumber, setnoHabitacion] = useState("");
  const [date, setDiaEntrada] = useState("");
  const [enterHour, setHoraEntrada] = useState("");
  const [exitHour, setHoraSalida] = useState("");
  const [vehicle, setVehiculo] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la alerta
  const idUser = localStorage.getItem('id');

  //Manejadores de eventos
  const handleNoHabitacion = async (e) => {
    if(e.target.value > 18){
      alert('Número de habitación incorrecto');
      return;
    }
    setnoHabitacion(e.target.value);
  }

  const handleDiaEntrada = (e) => {
    setDiaEntrada(e.target.value);
  }

  const handleHoraEntrada = (e) => {
    setHoraEntrada(e.target.value);
  }

  const handleHoraSalida = (e) => {
    setHoraSalida(e.target.value);
  }

  const handlVehiculo = (e) => {
    setVehiculo(e.target.value);
  }
  
  const handleSubmit = async e => {
    e.preventDefault();

    // Validacion si todos los campos estan completados
    if(!roomNumber || !date || !enterHour || !exitHour || !vehicle) {
      alert("Todos los campos son obligatorios");
      return
    }

    // Declaramos las varaibles donde se guarda infromacion de la habitacion 
    let idRoom;
    let totalCost;
    let roomType;
    let firstName;

    setIsLoading(true); // Inicia el estado de carga
    alert("Ingresando servicio, espere un momento..."); // Muestra alerta al usuario

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
      // Buscamos el usuario correspondiente a idUser y lo asignamos a la variable
      const userData = await data.find(user => user._id === idUser);
      firstName = userData.firstName;
    } catch(err) {
      console.error(err);
    }

    try {
      //Convertimos a tipo JSON el numero de habitacion
      const roomPayload = {roomNumber : roomNumber};
      const resRoom = await fetch('http://localhost:9292/find/rooms',{
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(roomPayload)
      });
      // Convertimos a JSON la respuesta 
      const data = await resRoom.json();
      // Obtenemos la informacion de la habitacion y las asignamos a las variables
      const roomData = data.find(room => room.roomNumber == roomPayload.roomNumber);
      idRoom = roomData._id;
      totalCost = roomData.cost;
      roomType = roomData.roomType;
    } catch (err) {
      console.error("Error en POST de habitacion", err);
    }
    
    try{
      // Creamos la peticion a la API 
      const res = await fetch("http://localhost:9292/insert/reservationHours", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        // Convertimos a JSON los valores 
        body: JSON.stringify({enterHour, exitHour, vehicle, totalCost, idRoom, idUser, date, roomType, firstName, roomNumber})
      })

      // Verificacion de la repuesta del servidor
      if(await res.status == 201){
        alert("Servicio registrado correctamente")
      } else {
        alert("Ocurrio un error, intentelo nuevamente");
      }
      return
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setIsLoading(false); // Finaliza el estado de carga
    }
  }

  const handleReset = async e => {
    e.preventDefault();
    setnoHabitacion('');
    setDiaEntrada('');
    setHoraEntrada('');
    setHoraSalida('');
  }

  return (
    <div className="p-10 w-full place-content-center">
      <h1 className="text-3xl text-center">Servicio por 4 horas</h1>
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
              value={roomNumber}
              onChange={handleNoHabitacion}
            />
          </div>
          <div className="flex flex-col w-1/3">
          <label htmlFor="diaDeEntrada" className="px-5">
              Dia de entrada
            </label>
            <input
              type="date"
              id="diaDeEntrada"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={date}
              onChange={handleDiaEntrada}
            />
          </div>
        </FormRow>
        <FormRow>
          <div className="flex flex-col w-1/3">
          <label htmlFor="horaDeEntrada" className="px-5">
              Hora de entrada
            </label>
            <input
              type="time"
              id="horaDeEntrada"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={enterHour}
              onChange={handleHoraEntrada}
            />
          </div>
          <div className="flex flex-col w-1/3">
          <label htmlFor="horaDeSalida" className="px-5">
              Hora de salida
            </label>
            <input
              type="time"
              id="horaDeSalida"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={exitHour}
              onChange={handleHoraSalida}
            />
          </div>
        </FormRow>
        <FormRow>
          <div className="flex flex-col w-1/3">
            <label htmlFor="vehiculo" className="px-5">
              Vehiculo
            </label>
            <input
              type="text"
              id="vehiculo"
              className="mx-5 p-2 dark:text-teal-950 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
              value={vehicle}
              onChange={handlVehiculo}
            />
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
            onClick={handleSubmit}
            className="bg-teal-700 hover:bg-teal-950 text-white font-bold py-2 px-4 m-6 rounded-lg"
          >
            {isLoading ? "Procesando..." : "Agregar"}
          </button>
        </FormRow>
      </form>
    </div>
  );
};

export default FormularioHoras;
