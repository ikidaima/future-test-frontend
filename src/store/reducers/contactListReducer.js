import { 
  GET_CONTACT, 
  SORT_CONTACT_LIST
} from '../../constants/constants'
import { compareSort } from '../../lib_tools/compareSort';

const initState = [];

const contactListReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CONTACT: 
      return [
        ...action.payload
      ];

    case SORT_CONTACT_LIST:
      const compare = compareSort(action.keySort, action.growth);

      return [...state].sort( compare );

    default: return state
  }
};

export default contactListReducer;