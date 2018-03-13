import React from 'react';

export default ({ label, volume, positive, neutral, negative }) => (
  <div className="side-panel">
    <div className="heading">Information on topic:
      <span>"{label}"</span>
    </div>
    <div className="heading">Total Mentions:
      <span>{volume}</span>
    </div>
    <br />
    <div className="heading">Positive Mentions:
      <span className="positive-count">{positive ? positive: 0}</span>
    </div>
    <div className="heading">Neutral Mentions:
      <span className="neutral-count">{neutral ? neutral : 0}</span>
    </div>
    <div className="heading">Negative Mentions:
      <span className="negative-count">{negative ? negative : 0 }</span>
    </div>
  </div>
);