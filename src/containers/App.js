import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">{this.props.children}</div>
          <div className="row">
            <a
              href="https://github.com/andresmijares/async-redux-saga"
              target="_new"
            >
              Check the <code>original</code> repo here
            </a>
          </div>
          <div className="row">
            <a
              href="https://github.com/icyJoseph/async-redux-saga"
              target="_new"
            >
              Check the <code>updated</code> repo here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
