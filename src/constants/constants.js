// API
export const API_SMALL_AMOUNT_OF_DATA = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
export const API_BIG_AMOUNT_OF_DATA = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

// ACTION TYPES

// CONTACT_LIST
export const GET_CONTACT = 'GET_CONTACT';
export const SORT_CONTACT_LIST = 'SORT_CONTACT_LIST';

// SORTING
export const CHANGE_SORT_VALUE = 'CHANGE_SORT_VALUE';
export const CHANGE_SORT_GROWTH = 'CHANGE_SORT_GROWTH';
export const RESET_SORT_VALUE = 'RESET_SORT_VALUE';

// RANGE OF CONTACT LIST
export const START_RANGE = 'START_RANGE';
export const INCREASE_RANGE = 'INCREASE_RANGE';
export const DECREASE_RANGE = 'DECREASE_RANGE';

// LOADING STATE
export const CHANGE_STATE_LOADING = 'CHANGE_STATE_LOADING';

// FILTER
export const FILTER_CONTACT_LIST = 'FILTER_CONTACT_LIST';
export const RESET_FILTERED_LIST = 'RESET_FILTERED_LIST';
export const SORT_FILTERED_LIST = 'SORT_FILTERED_LIST';

// FOR TABLE
export const MAIN_TABLE_COLUMNS = [
  {
    heading: 'id',
    key: 'id'
  },
  {
    heading: 'first name',
    key: 'firstName'
  },
  {
    heading: 'last name',
    key: 'lastName'
  },
  {
    heading: 'email',
    key: 'email'
  },
  {
    heading: 'phone',
    key: 'phone'
  },
];