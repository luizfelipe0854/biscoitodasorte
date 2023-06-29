import React, { Component } from "react";
import "./estilo.css";

class Botao extends Component{
    render(){
        return(
            <button onClick={this.props.acao} className="botao">{this.props.nome}</button>
        );
    }
}

export default Botao;