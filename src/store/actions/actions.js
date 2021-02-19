import { 
  CHANGE_SORT_VALUE,
  CHANGE_SORT_GROWTH,
  SORT_CONTACT_LIST,
  INCREASE_RANGE,
  DECREASE_RANGE,
  GET_CONTACT,
  CHANGE_STATE_LOADING,
  START_RANGE,
  FILTER_CONTACT_LIST,
  RESET_FILTERED_LIST,
  RESET_SORT_VALUE,
  SORT_FILTERED_LIST,
  CHANGE_SELECTED_CONTACT,
  ADD_CONTACT
} from '../../constants/constants';

export function getContact(contactList) {
  return {
    type: GET_CONTACT,
    payload: contactList
  }
}

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: contact
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

export function resetSortValue() {
  return {
    type: RESET_SORT_VALUE
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

export function filterContactList(sourceArr, categoryOfFilter, valueOfFilter) {
  return {
    type: FILTER_CONTACT_LIST,
    payload: {
      sourceArr,
      categoryOfFilter,
      valueOfFilter
    }
  }
}

export function sortFilteredList(keySort, growth) {
  return {
    type: SORT_FILTERED_LIST,
    keySort,
    growth
  }
}

export function resetFilteredList() {
  return {
    type: RESET_FILTERED_LIST
  }
}

export function changeSelectedContact(value) {
  return {
    type: CHANGE_SELECTED_CONTACT,
    payload: value
  }
}

export function fetchContactList(url) {
  return function(dispatch) {
    dispatch( changeStateLoading() );

    fetch(url)
      .then(response => response.json())
      .then(contactList => {
        dispatch( resetSortValue() );
        dispatch( startRange() );
        dispatch( getContact(contactList) );
        dispatch( changeStateLoading() );
      })
      .catch(err => {
        alert(err);
        dispatch( changeStateLoading() );
      });
  }
}