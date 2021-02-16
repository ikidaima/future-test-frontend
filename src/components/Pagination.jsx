import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from './generic/Button';

import { increaseRange, decreaseRange } from '../store/actions/actions'

const Pagination = () => {
  const dispatch = useDispatch();
  
  const rangeOfContact = useSelector(state => state.rangeOfContact);
  const contactList = useSelector(state => state.contactList);
  const isLoading = useSelector(state => state.isLoadingTableData);

  const nextButtonHandler = () => {
    dispatch( increaseRange() );
  };
  const prevButtonHandler = () => {
    dispatch( decreaseRange() );
  };

  return (
    <div className='pagination'>
      <Button
        type='button'
        description='prev'
        className='btn'
        isDisabled={rangeOfContact.start === 0 || isLoading}
        handler={prevButtonHandler}
      />
      <Button
        type='button'
        description='next'
        className='btn'
        isDisabled={rangeOfContact.end >= contactList.length || isLoading}
        handler={nextButtonHandler}
      />
    </div>
  );
};

export default Pagination;