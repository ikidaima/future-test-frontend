import { combineReducers } from 'redux';
import contactListReducer from './contactListReducer';
import valueOfSortReducer from './valueOfSortReducer';
import rangeOfContactReducer from './rangeOfContactReducer';
import loadingTableData from './loadingTableData';
import filteredContactListReducer from './filteredContactListReducer';
import selectedContactReducer from './selectedContactReducer';

const rootReducer = combineReducers({
  contactList: contactListReducer,
  valueOfSort: valueOfSortReducer,
  rangeOfContact: rangeOfContactReducer,
  isLoadingTableData: loadingTableData,
  filteredContactList: filteredContactListReducer,
  selectedContact: selectedContactReducer,
});

export default rootReducer;