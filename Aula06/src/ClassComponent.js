import { Component } from "react";

export default class ClassComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   alert(this.props.nome);
  // }

  handleFunction = () => alert(this.props.nome);

  render() {
    const { nome } = this.props;

    return (
      <div>
        <h1>{nome}</h1>
        <button onClick={this.handleFunction}>aperte</button>
      </div>
    );
  }
}
