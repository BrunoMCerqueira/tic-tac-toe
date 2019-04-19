import React, { Component } from "react";
import "./styles.css";

class NextPlayer extends Component {
  render() {
    return (
      <p className="player-playing-design">Next Player: { this.props.player }</p>
    )
  }
}

export default NextPlayer;
