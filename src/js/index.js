import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render () {
    return <p>React WebPack dev test</p>;
  }
}

render(<App/>, document.getElementById('app-entry'));
