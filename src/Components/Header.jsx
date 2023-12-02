import React from 'react'
import Navbar from './Navbar'

const Header = () => {
return (
    <div className='header'>
    <div style={{display: "flex", alignItems: "center"}} >
    <img src="/DH.ico" alt="logo dh"/>
    <h1>Odonto</h1>
    </div>
    <Navbar/>
    
    
    </div>
)
}

export default Header
