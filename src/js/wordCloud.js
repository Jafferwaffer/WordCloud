import React from 'react';
import TopicWord from './topicWord';
import SidePanel from './sidePanel';

export default class WordCloud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.topics[0]
    }
  }

  handleTopicClick = topic => {
    this.setState({ selected: topic });
  }

  render() {
    const { topics } = this.props;
    const { label, volume, sentiment } = this.state.selected;

    return (
      <div className="row">
        <div className="col-sm-8">
          <div className="cloud">
            {topics.map((topic) =>
              <TopicWord
                key={topic.id}
                label={topic.label}
                score={topic.sentimentScore}
                onClick={e => this.handleTopicClick(topic, e)}
              />
            )}
          </div>
        </div>

        <div className="col-sm-4">
          <SidePanel
            label={label}
            volume={volume}
            positive={sentiment.positive}
            neutral={sentiment.neutral}
            negative={sentiment.negative}
          />
        </div>
      </div>
    );
  }
}
