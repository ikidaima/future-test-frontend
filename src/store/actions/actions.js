import { 
  CHANGE_SORT_VALUE,
  CHANGE_SORT_GROWTH,
  SORT_CONTACT_LIST,
  INCREASE_RANGE,
  DECREASE_RANGE,
  GET_CONTACT,
  CHANGE_STATE_LOADING,
  START_RANGE
} from '../../constants/constants';

export function getContact(contactList) {
  return {
    type: GET_CONTACT,
    payload: contactList
  }
}

export function changeSortValue(value) {
  return {
    type: CHANGE_SORT_VALUE,
    payload: value
  }
}

export function changeSortGrowth(value) {
  return {
    type: CHANGE_SORT_GROWTH,
    payload: value
  }
}

export function sortContactList(keySort, growth) {
  return {
    type: SORT_CONTACT_LIST,
    keySort,
    growth
  }
}

export function startRange() {
  return {
    type: START_RANGE
  }
}

export function increaseRange() {
  return {
    type: INCREASE_RANGE
  }
}

export function decreaseRange() {
  return {
    type: DECREASE_RANGE
  }
}

export function changeStateLoading() {
  return {
    type: CHANGE_STATE_LOADING
  }
}

export function fetchContactList(url) {
  return function(dispatch) {
    dispatch( changeStateLoading() );

    fetch(url)
      .then(response => response.json())
      .then(contactList => {
        dispatch( startRange() )
        dispatch( getContact(contactList) );
        dispatch( changeStateLoading() );
      });
  }
}