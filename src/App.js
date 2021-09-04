import React, { useEffect, useState } from 'react';
// Agregando Emotion para Styled Components
// https://emotion.sh/docs/introduction
// npm i @emotion/styled @emotion/react

import styled from '@emotion/styled';
import Frase from './components/Frase';


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  /* background: linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%); */
  background: linear-gradient(to left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 2px solid black; 

  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // Para colocarla con la frase[0]  que se retorna y luego podra pasarla a los otros componentes
  const [frase, guardarFrase] = useState( {} );

     // const consultarAPI = () => {
    // console.log('Consultando...');
    // fetch con promise .then
    // const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // //console.log(api); // Promise {<pending>} pending es porque ocupa promesa y además falta crear otro .then

    // const frase = api.then( respuesta => respuesta.json() );
    // frase.then( resultado => console.log( resultado ) );
    // // 0: {quote: "I am not in danger, Skyler. I AM the danger!", author: "Walter White"}

    // Obtener la frase desde una API
  const consultarAPI = async () => {
  // fetch con async await
  const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  
  const frase = await api.json();
  //console.log( frase ); // la resp es un arreglo de objeto
  //console.log( frase[0] );//Acceder al objeto

  guardarFrase( frase[0] );//se guarda la frase en el state
  // ¿Cual es la ventaja de tenerla en una variable a un state?
  // debido a que al presionar el botón obtener Frase se cargará el último automaticamente gracias a REACT
  }

  //  109 useEffect para ejecutar codigo una vez (o cada que algo cambie)
  useEffect(() => {
    // Cuando el components App cargue, consultar a consultarAPI
    consultarAPI()

    // [] al menos una vez lo ejecuta
  }, [] )


  return (
    <Contenedor>

      <Frase 
        frase= { frase }
      />
      <Boton
        onClick={ () => consultarAPI() }
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
