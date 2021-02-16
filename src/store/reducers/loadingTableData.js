import { CHANGE_STATE_LOADING } from "../../constants/constants";

const initState = false;

const loadingTableData = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_STATE_LOADING:
      return !state;

    default:
      return state;
  }
};

export default loadingTableData;