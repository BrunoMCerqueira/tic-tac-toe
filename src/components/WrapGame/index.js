import React, { Component } from "react";
import "./styles.css"
import HistoryPlays from "../HistoryPlays";
import GameBoard from "../GameBoard";
import PlayerWins from "../PlayerWins";

class WrapGame extends Component {
  state = { player: "X", squares: Array(9).fill(""), history: [] };

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  goPast = (index) => this.setState({ squares: this.state.history[index] });

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

  render () {
    let gameDisplay;
    const { squares, player } = this.state;
    const winner = this.calculateWinner(squares);
    if(winner) {
      gameDisplay = <PlayerWins winner={winner} />;
    } else {
      gameDisplay = <GameBoard squares={squares} handleClick={this.handleClick} player={player} />;
    }

    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="app-wrap">
            {gameDisplay}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <HistoryPlays
            history={this.state.history} goPast={this.goPast}
          />
        </div>
      </>
    )
  }
}

export default WrapGame;