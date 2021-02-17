import { FILTER_CONTACT_LIST, RESET_FILTERED_LIST } from "../../constants/constants";

const initState = null;

const filteredContactListReducer = (state = initState, action) => {
  switch (action.type) {
    case FILTER_CONTACT_LIST:
      const {sourceArr, categoryOfFilter, valueOfFilter} = action.payload;
      
      return sourceArr.filter(item => {
        const valueIsChecked = (
          typeof item[categoryOfFilter] === 'string' ?
          item[categoryOfFilter] :
          String( item[categoryOfFilter] )
        ).toLowerCase();
        const lowerValueOfFilter = valueOfFilter.toLowerCase();

        return ~valueIsChecked.search(new RegExp(lowerValueOfFilter));
      });

    case RESET_FILTERED_LIST:
      return initState;

    default:
      return state;
  }
}

export default filteredContactListReducer;