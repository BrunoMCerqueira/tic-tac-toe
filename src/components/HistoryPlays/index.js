import React, { Component } from "react";

class HistoryPlays extends Component {
  render() {
    const { history } = this.props;
    return (
      <ol>
        {history && history.map((history, index) => <li key={index}>exemplo</li>)}
      </ol>
    )
  }
}

export default HistoryPlays;