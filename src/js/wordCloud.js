import React from 'react';
import TopicWord from './topicWord';
import SidePanel from './sidePanel';
import {shuffle, uniq, includes} from 'lodash-es';
import {ckmeans} from 'simple-statistics';

export default class WordCloud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.topics[0],
      topics: shuffle(this.groupByVolume(props.topics, 6))
    }
  }

  groupByVolume = (topics, nGroups) => {
    let topicsToReturn = [...topics];
    const volData = topicsToReturn.map(x => x.volume);
    let groupings = [];

    // Find groups & clean duplicates
    for (const group of ckmeans(volData, nGroups)) {
      groupings.push(uniq(group));
    }

    // Assign grp number to topic
    for (const topic of topicsToReturn) {
      for (const [index, group] of groupings.entries()) {
        if (includes(group, topic.volume)) {
          topic.popularity = index;
        }
      }
    }

    return topicsToReturn;
  }

  handleTopicClick = topic => {
    this.setState({ selected: topic });
  }

  render() {
    const topics  = this.state.topics;
    const { id, label, volume, sentiment } = this.state.selected;

    return (
      <div className="row">
        <div className="col-sm-8">
          <div className="cloud">
            {topics.map((topic) =>
              <TopicWord
                key={topic.id}
                label={topic.label}
                popularity={topic.popularity}
                score={topic.sentimentScore}
                isSelected={topic.id == id}
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
