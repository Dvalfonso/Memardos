import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [imagen, setImagen] = useState('gigachad');

  //El parametro que recibe la funcion es lo que el usuario ingrese en el input
  const onChangeLinea1 = function (evento) { 
    setLinea1(evento.target.value);
  }


  const opcion = function (evento) {
    setImagen(evento.target.value);
  }

  const onClickButton = function (evento){
    html2canvas(document.querySelector("#right")).then(canvas => {
      var img = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <div id='left'>
        <h1>Editor de memes</h1>

        <h3>Selecciona tu meme</h3> 

        <select onChange={opcion}>
          <option value="gigachad" >Gigachad</option>
          <option value="morty">Morty</option>
          <option value="smart">Smart guy</option>
        </select> <br/>

        <input id='input1' onChange={onChangeLinea1} type='text' placeholder='Linea 1'></input> <br/>

        <button onClick={onClickButton}>Exportar</button>
      </div>

      <div id='right'>
        <span id='texto1'>{linea1}</span>
        
        <img className='imagenMeme' src={"imagenes/" + imagen + ".jpg"}/>
        
      </div>

    </div>
  );
}

export default App;
