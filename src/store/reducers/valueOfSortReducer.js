import {
  MAIN_TABLE_COLUMNS,
  CHANGE_SORT_VALUE,
  CHANGE_SORT_GROWTH,
} from '../../constants/constants'

const initState = {
  value: MAIN_TABLE_COLUMNS[0]['key'],
  growth: true
};


const valueOfSortReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SORT_VALUE: return {
      ...state,
      value: action.payload
    }

    case CHANGE_SORT_GROWTH: return {
      ...state,
      growth: !state.growth
    }
    default: return state
  }
};

export default valueOfSortReducer;