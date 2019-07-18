import React, { Component } from 'react';
import './side-menu-old-ie.css'
import './side-menu.css'
import './style.css'
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lista: [{
        nome: '',
        email: ''
      }]
    };
  }

  componentWillMount(){
    $.ajax({
      url: "http://cdc-react.herokuapp.com/api/autores",
      dataType: 'json',
      success: function(resposta){
        this.setState({lista: resposta});
      }.bind(this)
    });
  }

  render() {
    return (
      <div id="layout">
        <a href="#menu">
          <span></span>
        </a>
        <div id="menu">
          <button className="btn btn-primary links-menu" href="#">Company</button>
          <ul>
            <li className="links-menu"><a>Home</a></li>
            <li className="links-menu"><a>Autor</a></li>
            <li className="links-menu"><a>livro</a></li>
          </ul>

        </div>
        <div className="main">
          <div className="container-fluid">
            <h1>Page Title</h1>
          </div>
        </div>

        <div>
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <div className="main" id="content">
            <div>
              <form>
                <label htmlFor="nome">Nome</label>
                <div>
                  <input id="nome" type="text" name="nome" value=""/>
                </div>
                <label htmlFor="email">Email</label>
                <div>
                  <input id="email" type="email" name="email" value=""/>
                </div>
                <label htmlFor="senha">Senha</label>
                <div>
                  <input id="senha" type="password" name="senha"/>
                </div>
                <div className="pure-control-group">
                  <label></label>
                  <button className="top" type="submit">Gravar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="main">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nome</th>              
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.lista.map(function(autor) {
                  return (
                    <tr>
                      <td>{autor.nome}</td>
                      <td>{autor.email}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
