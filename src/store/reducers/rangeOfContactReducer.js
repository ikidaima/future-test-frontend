import { INCREASE_RANGE, DECREASE_RANGE } from "../../constants/constants";

const startingPosition = 0;
const magnitudeOfChange = 50

const initState = {
  start: startingPosition,
  end: startingPosition + magnitudeOfChange
};

const rangeOfContactReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE_RANGE:
      return {
        start: state.start + magnitudeOfChange,
        end: state.end + magnitudeOfChange
      }

      case DECREASE_RANGE:
        return {
          start: state.start - magnitudeOfChange,
          end: state.end - magnitudeOfChange
        }
  
    default: return state;
  }
}

export default rangeOfContactReducer;