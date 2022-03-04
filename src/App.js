import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    Contador: 0,
    mensagem: ""
  };

  add = () => {
    const { Contador } = this.state;
    if (Contador < 10) {
      this.setState({
        Contador: Contador + 1
      });
    }
  };

  remove = () => {
    const { Contador } = this.state;
    if (Contador > 0) {
      this.setState({
        Contador: Contador - 1
      });
    }
  };

  render() {
    const { Contador } = this.state;
    const { add, remove } = this;
    return (
      <div className="container">
        <div className="box">
          <h1>Contador React</h1>
          <div className="counter">
            <button onClick={add}>Adicionar</button>
            <h2>{Contador}</h2>
            <button onClick={remove}>Subtrair</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
