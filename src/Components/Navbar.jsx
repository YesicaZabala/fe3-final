import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {

  const {dispatch} =useContextGlobal();

  return (
    <nav className='nav'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      

      <Link to="/">Home</Link>
      <Link to="/Contacto">Contacto</Link>
      <Link to="/Destacados">Destacados</Link>

    
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <button onClick={()=>dispatch({type: "SWITCH THEME"})}>
        <img src="/images/luna.png" alt="theme" width={' 50px'}/>
      </button>
    </nav>
  )
}
export default Navbar
//onClick={()=> setTheme()}