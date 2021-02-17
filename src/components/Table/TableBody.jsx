import React from 'react';
import { useSelector } from 'react-redux';

const TableBody = ({ columns, list }) => {
  const selectRangeOfContact = state => state.rangeOfContact;
  const rangeOfContact = useSelector(selectRangeOfContact);
  const limitRangeList = list.slice(rangeOfContact.start, rangeOfContact.end);

  return (
    <tbody>
      {
        limitRangeList.map( itemRow => {
          return (
            <tr 
              key={itemRow.phone}
            >
              {
                columns.map( (itemColumn, indexColumn) => {
                  return (
                    <td
                      className='table__cell table__cell--body'
                      key={indexColumn}
                    >
                      {itemRow[itemColumn.key]}
                    </td>
                  )
                } )
              }
            </tr>
          )
        })
      }
    </tbody>
  )
};

export default TableBody;