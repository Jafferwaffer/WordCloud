import React from 'react';
import { render } from 'react-dom';
import WordCloud from './wordCloud';
import topics from '../topics.json';
import '../styles/bootstrap.min.css';
import '../styles/index.css';
import _ from 'lodash';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h1>My Topics Challenge</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <WordCloud topics={topics.topics}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app-entry'));
