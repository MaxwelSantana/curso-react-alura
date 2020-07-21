import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  }

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posicao) => posicao !== index)
    });
  }

  escutadorDeSubmit = autor => {
    const { autores } = this.state;
    this.setState({
      autores: [...autores, autor]
    });
  }

  render() {
    return (
      <Fragment>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
      </Fragment>
    )
  }
}

export default App;
