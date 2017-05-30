import { GET_USERS, CREATE_USERS, DELETE_USER, UPDATE_USER, SET_SINGLE_USER, SEARCH_USERS } from '../actions/types';

const initialState = {
  users: {
    count: 0,
    rows: []
  },
  user: {},
  pagination: {
    page_count: 0,
    page: 0,
    page_size: 0,
    total_count: 0
  }
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({},
      state, { users: action.payload.users, pagination: action.payload.pagination });
    case CREATE_USERS: {
      return Object.assign({}, state, { users: { rows: [...state.users.rows, action.payload] } });
    }
    case DELETE_USER:
      return Object.assign({}, state,
      { users: { rows: state.users.rows.filter(user => user.id !== action.id) } });

    case UPDATE_USER:
      return Object.assign({}, state,
        { users: { rows:
        [...state.users.rows.filter(user => user.id !== action.payload.id),
          action.payload] },
          user: action.payload });

    case SET_SINGLE_USER:
      return Object.assign({}, state,
        { user: action.payload });

    case SEARCH_USERS:
      return action.payload;
    default:
      return state;
  }
};
