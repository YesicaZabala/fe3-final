import React from "react";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home" 
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import "./index.css";
import { useContextGlobal } from "./Components/utils/global.context";
import Header from "./Components/Header";

function App() {

  const{state}=useContextGlobal()
  return (
      <div className="App"style={{backgroundColor: !state.theme && 'grey' }} >
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contacto" element={<Contact/>}/>
            <Route path="/Detalle/:id" element={<Detail/>}/>
            <Route path="/Destacados" element={<Favs/>}/>  
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
