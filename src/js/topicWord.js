import React from 'react';

export default ({ label, popularity, score, isSelected, onClick }) => {
  let sentiment;
  if (score > 60) {
    sentiment = 'positive';
  } else if (score < 40) {
    sentiment = 'negative';
  } else {
    sentiment = 'neutral';
  }

  const selected = isSelected ? 'selected' : '';

  return (
    <div className={`topic-word ${sentiment} size-${popularity} ${selected}`} onClick={onClick}>
      {label}
    </div>
  );
}
