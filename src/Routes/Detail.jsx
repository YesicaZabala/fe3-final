import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] =useState({})


  const params =useParams()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id

  useEffect(()=>{      
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setDentist(data)
    })

  }, [])

  return (
    <>
    <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1>Informacion del dentista</h1>
      <img src="/images/doctor.jpg" alt="doctor" width={' 100px'}  />  
      <h3>Nombre y Apellido: {dentist.name}</h3>
      <h3>Email: {dentist.email}</h3>
      <h3>Teléfono: {dentist.phone}</h3>
      <h3>Web: {dentist.website}</h3>

    </div>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail