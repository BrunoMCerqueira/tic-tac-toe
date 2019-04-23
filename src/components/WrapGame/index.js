import React, { Component } from "react";
import SquareGame from "../SquareGame";
import "./styles.css"
import NextPlayer from "../NextPlayer";
import HistoryPlays from "../HistoryPlays";

class WrapGame extends Component {
  state = { player: "X", squares: Array(9).fill(""), history: [] };

  handleClick = (index) => {
    const { player } = this.state;
    const squares = this.state.squares.slice();
    squares[index] = player;

    this.setState(prevState => ({ 
      player: player === "X" ? "O" : "X",
      squares: squares,
      history: prevState.history.concat([squares])
    }));
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
      <>
        <div className="d-flex justify-content-center">
          <div className="app-wrap">
            <NextPlayer player={this.state.player}/>
            <main>
              {this.multiplySquares()}
            </main>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <HistoryPlays
            history={this.state.history} 
          />
        </div>
      </>
    )
  }
}

export default WrapGame;