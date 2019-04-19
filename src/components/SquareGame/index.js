import React from "react";
import "./styles.css";

const SquareGame = ({ content, handleClick }) => (
  <button 
    onClick={handleClick}
    className="square-design">
    { content }
  </button>
)

export default SquareGame;