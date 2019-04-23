import React from "react";
import "./styles.css";

const HistoryPlays = (props) => (
  <ol className="histories-list">
      {props.history && props.history.map((_, index) => (
        <li className="history-line" key={index} onClick={() => props.goPast(index)}>
          {index}
        </li>
      ))}
    </ol>
)


export default HistoryPlays;