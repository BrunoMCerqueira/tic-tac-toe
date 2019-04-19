import React from "react";
import SquareGame from "../SquareGame";
import "./styles.css"
import NextPlayer from "../NextPlayer";

const multiplySquares = () => {
  const squares = Array(9).fill();

  return squares.map((_, index) => <SquareGame key={index}/>)
}

const WrapSquares = () => (
  <div className="app-wrap">
    <NextPlayer/>
    <main>
      {multiplySquares()}
    </main>
  </div>
)

export default WrapSquares;