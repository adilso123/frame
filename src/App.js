import './App.css';
import React, { Component } from 'react';
import Rodapé from './componentes/Rodapé'; 

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    fetch('http://portal-noticias-ifms.herokuapp.com/apinoticias')
      .then(response => response.json())
      .then(noticias => this.setState({ noticias }))
  }

  render() {
    const { noticias } = this.state;

    return (
      <div className="App">
        <div className="Estilização">
          {noticias.map(noticia => (
            <div className="noticia" key={noticia.id}>
              <h1>{noticia.titulo}</h1>
              <p>{noticia.resumo}</p>
              <p>{noticia.autor}</p>
              <p>{noticia.noticia}</p>
              <p>{noticia.data_criacao}</p>
            </div>
          ))}
        </div>
        <Rodapé />
      </div>
    );
  }
}

export default App;
