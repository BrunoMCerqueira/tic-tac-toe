import React, { Component } from "react";
import "./styles.css";

class HistoryPlays extends Component {
  render() {
    const { history } = this.props;
    return (
      <ol className="histories-list">
        {history && history.map((history, index) => <li className="history-line" key={index}>Jogada {index + 1}</li>)}
      </ol>
    )
  }
}

export default HistoryPlays;