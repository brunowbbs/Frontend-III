import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: 20,
      name: "Wesley",
    };
  }

  increment = () => {
    this.setState({
      numero: this.state.numero + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.numero}</h1>
        <button onClick={this.increment}>Incrementar</button>
      </div>
    );
  }
}
