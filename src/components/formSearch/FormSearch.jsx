import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactList, resetFilteredList, startRange } from '../../store/actions/actions';

import Button from '../generic/Button';
import ParamOfSearch from './ParamOfSearch';

import './FormSearch.scss';

const initParamOfFilter = {
  category: null,
  value: null
};

const FormSearch = () => {
  const contactList = useSelector(state => state.contactList);
  const dispatch = useDispatch();

  const [valueOfSearch, setValueOfSearch] = useState('');
  const [categoryOfSearch, setCategoryOfSearch] = useState('id');
  const [paramOfFilter, setParamOfFilter] = useState(initParamOfFilter);

  const formHandler = (event) => {
    event.preventDefault();

    setParamOfFilter({
      category: categoryOfSearch,
      value: valueOfSearch
    })
    setValueOfSearch('');

    dispatch( filterContactList(contactList, categoryOfSearch, valueOfSearch) );
    dispatch( startRange() );
  };
  const inputSearchHandler = (event) => {
    setValueOfSearch(event.target.value);
  };
  const selectChangeHandler = (event) => {
    setCategoryOfSearch(event.target.value);
  };
  const deleteParamOfSearch = () => {
    setParamOfFilter(initParamOfFilter);
    dispatch( resetFilteredList() );
  };

  return (
    <div>
      <form 
        className="form-search"
        onSubmit={formHandler}
      >
        <select value={categoryOfSearch} onChange={selectChangeHandler}>
          <option value="id">id</option>
          <option value="firstName">first name</option>
          <option value="lastName">last name</option>
          <option value="email">email</option>
          <option value="phone">phone</option>
        </select>
        <input
          type="text"
          value={valueOfSearch}
          onChange={inputSearchHandler}
        />
        <Button
          type='submit'
          description='search'
          className='btn'
          isDisabled={ !Boolean(valueOfSearch) }
        />
      </form>
      <ParamOfSearch
        param={paramOfFilter}
        handler={deleteParamOfSearch}
      />
    </div>
  )
}

export default FormSearch;