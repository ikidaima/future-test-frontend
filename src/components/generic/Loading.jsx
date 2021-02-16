import React from 'react';

import './Loading.scss';

const Loading = (props) => {
  if (props.isLoading) {
    return (
      <div className="loading">
        <div className="loading__circle"></div>
      </div>
    )
  }

  return null;
};

export default Loading;