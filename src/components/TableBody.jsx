import React from 'react';

const TableBody = ({ columns, list, valueOfSort }) => {

  return (
    <tbody>
      {
        list.map( itemRow => {
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