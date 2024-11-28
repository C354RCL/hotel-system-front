import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  // Inicializamos las variables como cadenas vacias
  const [user, setUserName] = useState("");
  const [password, setPasswd] = useState("");
  const navigate = useNavigate();
  
  //Manjeador de eventos de user
  const handleUserName = e => {
    setUserName(e.target.value);
  }

  // Manejador de eventos de password
  const handlePasswd = e => {
    setPasswd(e.target.value);
  }

  //Manejador de eventos de boton Iniciar Sesion
  const handleLogIn = async e => {
    e.preventDefault();

    try{
      // Validacion de que los campos esten completos
      if(user === '' || password === '') {
        alert('Se requiere llenar todos los campos');
        return;
      }

      // Limpiamos el localStorage
      localStorage.clear();
      // Guardamos user en el localStorage
      localStorage.setItem("user", user);
      //Cambio los nombres para que hagan match con los campos de la base de datos
      const res = await fetch('http://localhost:9292/find/users', {
        method : 'POST',
        mode : "cors",
        headers : {"Content-Type" : "application/json"},
        //Se hace el JSON que tenga la misma forma que en la base de datos con las variables iguales a los nombres
        body : JSON.stringify({user, password})
      });
      const data = await res.json();
      console.log('Data',data.code);
      const userData = await data[0];

      if(await data.code == 404){
        alert('Usuario y/o contraseña incorrecta');
        return
      }  else if (await userData.position == 'Admin'){
        navigate("/nuevo");
        return
      } else if (await userData.position === 'Recepcionista') {
        navigate("/admin/inicio");
        return
      } 
    } catch (err) {
      console.error("Error: ", err)
    }
  }
  
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="flex justify-center my-auto">
        <div className="px-6 py-4 bg-white dark:bg-slate-900 shadow-xl rounded-lg max-w-md">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-32 fill-teal-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>
          </div>

          <h1 className="text-3xl leading-6 font-normal text-teal-700 dark:text-emerald-50 text-center py-6">
            INICIO DE SESIÓN
          </h1>
          <form method="post" className="space-y-4">
            <div>
              <label htmlFor="username" className="m-2 block text-teal-600 dark:text-emerald-50">
                Usuario:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Usuario"
                value = {user}
                onChange={handleUserName}
                className="w-full py-2 px-4 border border-gray-200 shadow-sm dark:text-slate-900 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-70 focus:bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="password" className="m-2 block text-teal-600 dark:text-emerald-50">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="******"
                value= {password}
                onChange={handlePasswd}
                className="w-full py-2 px-4 border border-gray-200 shadow-sm dark:text-slate-900 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-70 focus:bg-gray-100"
              />
            </div>

            <div className="flex items-center justify-center w-full mt-4">
              <input
                type="button"
                value="Iniciar Sesión"
                onClick={handleLogIn}
                className="w-2/3 bg-teal-700 hover:bg-teal-950 text-white font-bold py-2 px-4 m-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
