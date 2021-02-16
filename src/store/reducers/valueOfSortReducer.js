import {
  CHANGE_SORT_VALUE,
  CHANGE_SORT_GROWTH,
} from '../../constants/constants'

const initState = {
  value: null,
  growth: true
};


const valueOfSortReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SORT_VALUE: return {
      ...state,
      value: action.payload
    };

    case CHANGE_SORT_GROWTH: return {
      ...state,
      growth: action.payload
    };

    default: return state;
  }
};

export default valueOfSortReducer;