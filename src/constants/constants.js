// API
export const API_SMALL_AMOUNT_OF_DATA = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
export const API_BIG_AMOUNT_OF_DATA = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

// ACTION TYPES
export const GET_CONTACT = 'GET_CONTACT';
export const SORT_CONTACT_LIST = 'SORT_CONTACT_LIST';
export const CHANGE_SORT_VALUE = 'CHANGE_SORT_VALUE';
export const CHANGE_SORT_GROWTH = 'CHANGE_SORT_GROWTH';
export const INCREASE_RANGE = 'INCREASE_RANGE';
export const DECREASE_RANGE = 'DECREASE_RANGE';

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
]