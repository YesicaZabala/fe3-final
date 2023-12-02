import React from 'react'
import "../index.css"

const Footer = () => {
  return (
    
      <footer>
        <div style={{backgroundColor: "red"}} />
        <div style={{display:"flex"}}>
          <p>Powered by</p>
          <img src="/images/DH.png" alt='DH-logo' width={' 200px'} />
        </div>
      
        <div style={{backgroundColor:"black", display:"flex", alignItems:"center"}}>
            <img src="/images/ico-facebook.png" alt="icono face" width={' 25px'}/>
            <img src="/images/ico-instagram.png" alt="icono insta" width={' 25px'}/>
            <img src="/images/ico-tiktok.png" alt="icono tiktok" width={' 25px'}/>
            <img src="/images/ico-whatsapp.png" alt="icono whatsapp" width={' 25px'}/>      
        </div>
      </footer>
    )
  }

export default Footer
