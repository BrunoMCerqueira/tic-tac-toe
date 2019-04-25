import React from "react";
import "./styles.css";

const PlayerWins = (props) => (
  <div>
    <p className="winner-message">The winner is {props.winner}</p>
  </div>
)

export default PlayerWins;