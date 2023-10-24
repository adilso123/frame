import React, { Component } from 'react';
import '../App.css';

class Topo extends Component {
  render() {
    return (
      <div className="Topo">
        <header>
          <img src="/th.jpg" alt="Logo da Minha Aplicação" />
          <h1> Portal de Notícias</h1>
        </header>
      </div>
    );
  }
}

export default Topo;
