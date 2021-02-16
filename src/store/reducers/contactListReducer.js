import { 
  API_SMALL_AMOUNT_OF_DATA,
  API_BIG_AMOUNT_OF_DATA,
  GET_CONTACT 
} from '../../constants/constants'

const initState = [];

const contactListReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CONTACT: return [
      ...action.payload
    ];
    default: return state
  }
};

export const fetchSmallContactList = (dispatch) => {
  fetch(API_BIG_AMOUNT_OF_DATA)
    .then(response => response.json())
    .then(contactList => {
      dispatch(
        {
          type: GET_CONTACT,
          payload: contactList
        }
      )
    });
}

export default contactListReducer;