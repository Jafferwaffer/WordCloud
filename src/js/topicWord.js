import React from 'react';

export default ({ label, size, colour, selected, onClick }) => (
  <div className={`topic-word ${colour} ${size} ${selected}`} onClick={onClick}>
    {label}
  </div>
);
