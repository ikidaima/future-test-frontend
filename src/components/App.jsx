import React from 'react';
import { useSelector } from 'react-redux';

import ToolBar from './ToolBar';
import Table from './Table/Table';
import Pagination from './Pagination';
import Loading from './generic/Loading';

import './App.scss';

const App = () => {
  const isLoadingTableData = useSelector(state => state.isLoadingTableData);

  return (
    <div className='app'>
      <ToolBar />
      <div className="table-wrapper">
        <Loading isLoading={isLoadingTableData} />
        <Table />
      </div>
      <Pagination />
    </div>
  )
};

export default App;