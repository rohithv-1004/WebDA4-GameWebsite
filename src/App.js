import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <iframe src={`${process.env.PUBLIC_URL}/index.html`} title="External Content" width="100%" height="600px"></iframe>
      </div>
    );
  }
}

export default App;
