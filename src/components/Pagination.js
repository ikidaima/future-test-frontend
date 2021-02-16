import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from './generic/Button';

import { increaseRange, decreaseRange } from '../store/actions/actions'

const Pagination = () => {
  const dispatch = useDispatch();

  const selectRangeOfContact = state => state.rangeOfContact;
  const selectContactList = state => state.contactList;
  
  const rangeOfContact = useSelector(selectRangeOfContact);
  const contactList = useSelector(selectContactList);

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
        isDisabled={rangeOfContact.start === 0}
        handler={prevButtonHandler}
      />
      <Button
        type='button'
        description='next'
        className='btn'
        isDisabled={rangeOfContact.end >= contactList.length}
        handler={nextButtonHandler}
      />
    </div>
  );
};

export default Pagination;