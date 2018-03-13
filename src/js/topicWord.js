import React from 'react';

export default ({ label, size, score, selected, onClick }) => {
  let sentiment;
  if (score > 60) {
    sentiment = 'positive';
  } else if (score < 40) {
    sentiment = 'negative';
  } else {
    sentiment = 'neutral';
  }

  return (
    <div className={`topic-word ${sentiment} ${size} ${selected}`} onClick={onClick}>
      {label}
    </div>
  );
}
