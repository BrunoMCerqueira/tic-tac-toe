import React, { Component } from 'react';
import WrapSquares from './components/WrapSquares';
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center w-100">
        <WrapSquares />
      </div>
    )
  }
}

export default App;
