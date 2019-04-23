import React, { Component } from "react";
import "./styles.css";

class HistoryPlays extends Component {
  render() {
    const { history } = this.props;
    return (
      <ol className="histories-list">
        {history && history.map((_, index) => (
          <li className="history-line" key={index} onClick={() => this.props.goPast(index)}>
            {index}
          </li>
        ))}
      </ol>
    )
  }
}

export default HistoryPlays;