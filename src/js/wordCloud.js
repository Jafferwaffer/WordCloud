import React from 'react';
import TopicWord from './topicWord';
import SidePanel from './sidePanel';

export default class WordCloud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.topics[0]
    }

    this.handleTopicClick = this.handleTopicClick.bind(this);
  }

  handleTopicClick = topic => {
    this.setState({ selected: topic });
  }

  render() {
    const { topics } = this.props;
    const { label, volume, sentiment } = this.state.selected;

    return (
      <div>
        <div className="cloud">
          {topics.map((topic) =>
            <TopicWord
              key={topic.id}
              label={topic.label}
              onClick={e => this.handleTopicClick(topic, e)}
            />
          )}
        </div>

        <SidePanel
          label={label}
          volume={volume}
          positive={sentiment.positive}
          neutral={sentiment.neutral}
          negative={sentiment.negative}
        />
      </div>
    );
  }
}
