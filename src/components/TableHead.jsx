import React from 'react';
import { useDispatch } from 'react-redux';

import { changeSortValue, changeSortGrowth } from '../store/actions/actions';

const TableHead = ({ columns, valueOfSort }) => {
  const dispatch = useDispatch();
  const thClickHandler = (event) => {
    const keySort = event.target.dataset.key;

    if (keySort === valueOfSort.value) {
      dispatch( changeSortGrowth() )
      return;
    }

    dispatch( changeSortValue(keySort) );
  }

  return (
    <thead>
      <tr>
        {columns.map((item, index) => {
          const className = ['table__cell', 'table__cell--head'];

          if (item.key === valueOfSort.value) {
            valueOfSort.growth ? className.push('sort') : className.push('sort', 'sort--decrease');
          }

          return (
            <th
              className={className.join(' ')}
              key={index}
              onClick={thClickHandler}
              data-key={item.key}
            >
              {item.heading}
            </th>
          )
        })}
      </tr>
    </thead>
  )
};

export default TableHead;