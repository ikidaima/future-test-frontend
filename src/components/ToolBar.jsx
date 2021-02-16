import React from 'react';
import { useDispatch } from 'react-redux';
import { API_BIG_AMOUNT_OF_DATA, API_SMALL_AMOUNT_OF_DATA } from '../constants/constants';
import { fetchContactList } from '../store/actions/actions';

import Button from './generic/Button';

import './ToolBar.scss';

const  ToolBar = () => {
  const dispatch = useDispatch();

  const smallButtonHandler = () => {
    dispatch( fetchContactList(API_SMALL_AMOUNT_OF_DATA) );
  }

  const bigButtonHandler = () => {
    dispatch( fetchContactList(API_BIG_AMOUNT_OF_DATA) );
  }

  return (
    <div className='toolbar'>
      <Button
        type='button'
        description='load small data'
        className='btn'
        handler={smallButtonHandler}
      />
      <Button
        type='button'
        description='load big data'
        className='btn'
        handler={bigButtonHandler}
      />
    </div>
  )
};

export default ToolBar;