import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {this.props.children}
            <a
              href="https://github.com/andresmijares/async-redux-saga"
              target="_new"
            >
              Check the repo here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
