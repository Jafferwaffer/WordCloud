import React from 'react';

export default ({ label, volume, positive, neutral, negative }) => (
  <div className="side-panel">
    <div>Information on topic: "{label}"</div>
    <div>Total Mentions: {volume}</div>
    <br />
    <div>Positive Mentions:
      <span className="positive-count">{positive ? positive: 0}</span>
    </div>
    <div>Neutral Mentions:
      <span className="neutral-count">{neutral ? neutral : 0}</span>
    </div>
    <div>Negative Mentions:
      <span className="negative-count">{negative ? negative : 0 }</span>
    </div>
  </div>
);