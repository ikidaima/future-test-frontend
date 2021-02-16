import { combineReducers } from 'redux';
import contactListReducer from './contactListReducer';
import valueOfSortReducer from './valueOfSortReducer';
import rangeOfContactReducer from './rangeOfContactReducer';
import loadingTableData from './loadingTableData';

const rootReducer = combineReducers({
  contactList: contactListReducer,
  valueOfSort: valueOfSortReducer,
  rangeOfContact: rangeOfContactReducer,
  isLoadingTableData: loadingTableData,
});

export default rootReducer;