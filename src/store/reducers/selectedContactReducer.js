import { CHANGE_SELECTED_CONTACT } from "../../constants/constants";

const initState = null;

const selectedContactReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_CONTACT:
      return action.payload;

    default:
      return state;
  }
}

export default selectedContactReducer;