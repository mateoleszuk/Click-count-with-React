import react from 'react';
import'./boton.css';
class Boton extends react.Component {
    render(){
        return(
            <button
            className={ this.props.botonDeClick ? 'boton-click' : 'boton-reiniciar' }
            onClick={this.props.manejarClick}>
                {this.props.texto}
            </button>
        )
    }
}


export default Boton;