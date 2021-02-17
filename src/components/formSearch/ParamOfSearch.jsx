import React from 'react';
import Button from '../generic/Button';

const ParamOfSearch = ({param, handler}) => {
  if (param.category && param.value) {
    return (
      <div className="form-search__param">
        <span>Category: {param.category}</span>
        <span>value: {param.value}</span>
        <Button
          className='close'
          handler={handler}
        />
      </div>
    )
  }

  return null;
};

export default ParamOfSearch;