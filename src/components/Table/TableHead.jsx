import React from 'react';
import { useDispatch } from 'react-redux';

import { changeSortValue, changeSortGrowth, sortContactList } from '../../store/actions/actions';

const TableHead = ({ columns, valueOfSort, listLength }) => {
  const dispatch = useDispatch();

  const thClickHandler = (event) => {
    if (listLength) {
      const keySort = event.target.dataset.key;
      const isCurrentItemOfSort = keySort === valueOfSort.value
      const growth = isCurrentItemOfSort ? !valueOfSort.growth : valueOfSort.growth;
  
      isCurrentItemOfSort ? 
        dispatch( changeSortGrowth(growth) ) : 
        dispatch( changeSortValue(keySort) );
  
      dispatch( sortContactList(keySort, growth) );
    }
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