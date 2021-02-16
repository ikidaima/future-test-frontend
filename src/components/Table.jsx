import React from 'react';
import { useSelector } from 'react-redux';

import TableBody from './TableBody';
import TableHead from './TableHead';
import { MAIN_TABLE_COLUMNS } from '../constants/constants'

import './Table.scss';

const Table = () => {
  const selectContactList = state => state.contactList;
  const selectValueOfSort = state => state.valueOfSort

  const contactList = useSelector(selectContactList);
  const valueOfSort = useSelector(selectValueOfSort);

  return (
    <table className='table'>
      <TableHead 
        columns={MAIN_TABLE_COLUMNS}
        valueOfSort={valueOfSort}
      />
      <TableBody
        columns={MAIN_TABLE_COLUMNS}
        list={contactList}
        valueOfSort={valueOfSort}
      />
    </table>
  )
};

export default Table;