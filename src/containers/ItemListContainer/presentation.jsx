import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <li className="list-group-item">
        <a href={this.props.link}>{this.props.value}</a>{" "}
      </li>
    );
  }
}

export class Input extends Component {
  render() {
    return <input type="text" placeholder={this.props.placeholder} />;
  }
}

export class PasswordInput extends Component {
  render() {
    return <input type="password" placeholder="Enter your password" />;
  }
}

export class Titulo extends Component {
  render() {
    return <h1>{this.props.value}</h1>;
  }
}
