import React from 'react';
import reactLogo from './stylesheet/react-logo.png';
import './App.css';
import Boton from './stylesheet/boton.js'
import Contador from './stylesheet/contador';



class App extends React.Component{
 constructor(){
  super();
  this.state = {
    numClick: 0
  };
  this.manejarClick = this.manejarClick.bind(this);
  this.reiniciarContador = this.reiniciarContador.bind(this);
 }
 manejarClick(){
  this.setState(({ numClick }) =>({ numClick: numClick + 1 }));
 }
 reiniciarContador(){
  this.setState ({ numClick:0});
 }

 render(){
  return (
    <div className="App">
      <div className='react-Logo-contenedor'>
        <img
         className='react-logo'
         src={reactLogo}
         alt='logo de react'/>
      </div>
      <div className='contenedor-principal'>
        <Contador  numClick={this.state.numClick} />
        <Boton texto='click'
        botonDeClick={true}
        manejarClick={this.manejarClick}
        />
        <Boton 
        texto ='reset'
        botonDeClick={false}
        manejarClick={this.reiniciarContador}
        />
      </div>
    </div>
  );

 }
}

/*
function App() {

  const [numClick, setNumClick] = useState(0);
  const manejarClick = () => {
    setNumClick(numClick + 1);
    
  };
const reiniciarContador = () => {
  setNumClick(0);
};
  return (
    <div className="App">
      <div className='react-Logo-contenedor'>
        <img
         className='react-logo'
         src={reactLogo}
         alt='logo de react'/>
      </div>
      <div className='contenedor-principal'>
        <Contador  numClick={numClick} />
        <Boton texto='click'
        botonDeClick={true}
        manejarClick={manejarClick}
        />
        <Boton 
        texto ='reset'
        botonDeClick={false}
        manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
};
 */
export default App;
