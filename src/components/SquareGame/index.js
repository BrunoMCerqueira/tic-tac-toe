import React, { Component } from "react";
import "./styles.css";

class SquareGame extends Component {
  state = { disabled: false };
  updateStatePlayer = () => {
    const { disabled } = this.state;
    this.setState({ disabled: !disabled });
    this.props.handleClick();
  }

  render() {
    return (
      <button 
        onClick={this.updateStatePlayer}
        className="square-design"
        disabled={this.state.disabled}>
          { this.props.square }
      </button>
    )
  }
}

export default SquareGame;