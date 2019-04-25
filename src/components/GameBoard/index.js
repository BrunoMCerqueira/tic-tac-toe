import React, { Component } from "react";
import "./styles.css";
import NextPlayer from "../NextPlayer";
import SquareGame from "../SquareGame";

class GameBoard extends Component {
  multiplySquares = () => {
    const numberSquares = Array(9).fill();
  
    return numberSquares.map((_, index) => (
      <SquareGame 
        key={index}
        handleClick={() => this.props.handleClick(index)}
        square={this.props.squares[index]}
      />)
    )
  }

  render(){
    return(
      <>
        <NextPlayer player={this.props.player}/>
        <main>
          {this.multiplySquares()}
        </main>
      </>
    )
  }
}

export default GameBoard;