import React from 'react'


import { createContext, useContext, useEffect, useReducer} from "react";

export const ContextGlobal = createContext(undefined);

const localFavs = JSON.parse(localStorage.getItem("favs"))
const initialFav = localFavs? localFavs: []
const htmlElement = document.documentElement;
  htmlElement.setAttribute(
  "data-bs-theme",
  theme.darkMode ? "light" : "dark")


const initialState = {
  theme: true,
  dentists: [],
  favs: initialFav,
}

function reducer(state, action){
  switch(action.type){
    case "GET_DENTISTS":
      return {...state, dentists: action.payload};

    case "ADD_FAV":
      return {...state, favs : [...state.favs, action.payload] };

    case "DELETE_FAV":
      return {...state, favs: action.payload};

    case "ELIMINAR_FAVORITOS":
        return {...state, favs: []};


    case "SWITCH THEME":
      return {...state, theme: !state.theme};

    
    default:
      throw new Error()
  }
}
  


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch]= useReducer(reducer, initialState)


  useEffect(()=>{      
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      dispatch({type: "GET_DENTISTS", payload: data })
    })

  }, [])

  useEffect(()=>{   

  localStorage.setItem("favs", JSON.stringify(state.favs) )
    
  }, [state.favs])



  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};




export const useContextGlobal = ()=> useContext(ContextGlobal)