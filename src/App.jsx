import React from 'react'
import Login from './components/Login.jsx'
import MenuInicial from './components/MenuInicial/MenuInicial.jsx'

const isAdmin = true;
const isLogged = true;


const App = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>  
      {isLogged ? <MenuInicial isAdmin={isAdmin} /> : <Login />}
    </div>
  )
}

export default App