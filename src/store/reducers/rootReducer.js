import { combineReducers } from 'redux';
import contactListReducer from './contactListReducer';
import valueOfSortReducer from './valueOfSortReducer';
import rangeOfContactReducer from './rangeOfContactReducer';
import loadingTableData from './loadingTableData';
import filteredContactListReducer from './filteredContactListReducer';

const rootReducer = combineReducers({
  contactList: contactListReducer,
  valueOfSort: valueOfSortReducer,
  rangeOfContact: rangeOfContactReducer,
  isLoadingTableData: loadingTableData,
  filteredContactList: filteredContactListReducer,
});

export default rootReducer;