import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state,dispatch} = useContextGlobal()

  const eliminarFavoritos = ()=>{
    dispatch({type: "ELIMINAR_FAVORITOS"})
  }
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      <button onClick={eliminarFavoritos} className="favButton">{(Object.entries(state.favs).length === 0)?"No hay favoritos": "Eliminar favoritos"}</button>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map(dentista=><Card  dentista={dentista} key={dentista.id} /> )}
      </div>
    </>
  );
};

export default Favs;
