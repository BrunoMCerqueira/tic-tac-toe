import React from "react";
import SquareGame from "../SquareGame";
import "./styles.css"

const multiplySquares = () => {
  const squares = Array(9).fill();

  return squares.map((_, index) => <SquareGame key={index}/>)
}

const WrapSquares = () => (
  <main className="wrap-squares-design">
    {multiplySquares()}
  </main>
)

export default WrapSquares;