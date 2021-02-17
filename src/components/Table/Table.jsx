import React from 'react';
import { useSelector } from 'react-redux';

import TableBody from './TableBody';
import TableHead from './TableHead';
import { MAIN_TABLE_COLUMNS } from '../../constants/constants'

import './Table.scss';

const Table = () => {
  const contactList = useSelector(state => state.contactList);
  const filteredContactList = useSelector(state => state.filteredContactList);
  const valueOfSort = useSelector(state => state.valueOfSort);

  return (
    <table className='table'>
      <TableHead 
        columns={MAIN_TABLE_COLUMNS}
        valueOfSort={valueOfSort}
        listLength={contactList.length}
        filteredList={filteredContactList}
      />
      <TableBody
        columns={MAIN_TABLE_COLUMNS}
        list={filteredContactList || contactList}
      />
    </table>
  )
};

export default Table;