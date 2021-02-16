import { 
  CHANGE_SORT_VALUE,
  CHANGE_SORT_GROWTH,
  SORT_CONTACT_LIST,
  INCREASE_RANGE,
  DECREASE_RANGE
} from '../../constants/constants';

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