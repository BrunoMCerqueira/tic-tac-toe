import React, { Component } from "react";
import "./styles.css";

class SquareGame extends Component {
  state = { point: "", disabled: false };
  updateStatePlayer = () => {
    this.setState({ point: this.props.content, disabled: !this.state.disabled });
    this.props.handleClick();
  }

  render() {
    return (
      <button 
        onClick={this.updateStatePlayer}
        className="square-design"
        disabled={this.state.disabled}>
          { this.state.point }
      </button>
    )
  }
}

export default SquareGame;