import { SEARCH_MY_DOCUMENT,
  LOAD_DOCUMENTS,
  USER_DOCUMENT, CREATE_DOCUMENT,
  UPDATE_DOCUMENT, SET_SINGLE_DOCUMENT,
  DELETE_DOCUMENT, SEARCH_DOCUMENT } from '../actions/types';

const initialState = {
  documents: [],
  pagination: {},
};

/**
* Documents reducer
*
* @export
* @param {object} [state=initialState] initial state
* @param {object} action action
* @returns {object} reduced or initial state
*/
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_DOCUMENTS:
      return { ...state,
        ...{ documents: action.payload.documents,
          pagination: action.payload.pagination } };

    case USER_DOCUMENT:
      return { ...state,
        ...{
          documents: action.payload.documents,
          pagination: action.payload.pagination,
        } };

    case CREATE_DOCUMENT: {
      return { ...state,
        ...{
          documents: [...state.documents, action.payload],
        } };
    }

    case UPDATE_DOCUMENT:
      return { ...state,
        ...{
          documents: [...state.documents.filter(document =>
          document.id !== action.payload.id),
            action.payload],
        } };

    case SET_SINGLE_DOCUMENT:
      return { ...state, ...action.payload,
      };

    case DELETE_DOCUMENT:
      return { ...state,
        ...{ documents: state.documents
        .filter(document => document.id !== action.id) } };

    case SEARCH_DOCUMENT:
      return { ...state,
        ...{
          documents: action.payload.documents,
          pagination: action.payload.pagination,
        } };
    case SEARCH_MY_DOCUMENT:
      return { ...state,
        ...{
          documents: action.payload.documents,
          pagination: action.payload.pagination,
        } };
    default:
      return state;
  }
};
