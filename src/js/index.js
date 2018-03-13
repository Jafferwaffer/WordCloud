import React from 'react';
import { render } from 'react-dom';
import WordCloud from './wordCloud';
import topics from '../topics.json';
import '../index.css';
import _ from 'lodash';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>My Topics Challenge</h1>
        <WordCloud topics={topics.topics}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app-entry'));
