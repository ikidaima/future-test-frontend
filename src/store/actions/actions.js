import { CHANGE_SORT_VALUE, CHANGE_SORT_GROWTH } from '../../constants/constants';

export function changeSortValue(value) {
  return {
    type: CHANGE_SORT_VALUE,
    payload: value
  }
}

export function changeSortGrowth() {
  return {
    type: CHANGE_SORT_GROWTH,
  }
}