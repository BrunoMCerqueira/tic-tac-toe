import React, { Component } from "react";
import SquareGame from "../SquareGame";
import "./styles.css"
import NextPlayer from "../NextPlayer";
import HistoryPlays from "../HistoryPlays";

class WrapSquares extends Component {
  state = { player: "X" };

  handleClick = () => {
    this.setState({ player: this.state.player === "X" ? "O" : "X" });
  }

  multiplySquares = () => {
    const squares = Array(9).fill();
  
    return squares.map((_, index) => (
      <SquareGame key={index} content={this.state.player} handleClick={this.handleClick}/>)
    )
  }

  render () {
    return (
      <div className="app-wrap">
        <NextPlayer player={this.state.player}/>
        <main>
          {this.multiplySquares()}
        </main>
        <HistoryPlays/>
      </div>
    )
  }
}

export default WrapSquares;