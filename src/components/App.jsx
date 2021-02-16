import React from 'react';

import Table from './Table';
import Pagination from './Pagination';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Table />
      <Pagination />
    </div>
  )
};

export default App;