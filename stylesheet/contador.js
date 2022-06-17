import React from "react";
import './contador.css';

class Contador extends React.Component{
    render(){
        return (
            <div className='contador'>
                {this.props.numClick }
            </div>
        );
    }
}


export default Contador;