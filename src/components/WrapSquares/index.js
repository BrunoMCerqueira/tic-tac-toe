import React, { Component } from "react";
import SquareGame from "../SquareGame";
import "./styles.css"
import NextPlayer from "../NextPlayer";
import HistoryPlays from "../HistoryPlays";

class WrapSquares extends Component {
  state = { player: "X", squares: Array(9).fill("") };

  handleClick = (index) => {
    const { player, squares } = this.state;
    squares[index] = player;

    this.setState({ 
      player: player === "X" ? "O" : "X",
      squares,
    });
  }

  multiplySquares = () => {
    const numberSquares = Array(9).fill();
  
    return numberSquares.map((_, index) => (
      <SquareGame 
        key={index}
        handleClick={() => this.handleClick(index)}
        square={this.state.squares[index]}
      />)
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