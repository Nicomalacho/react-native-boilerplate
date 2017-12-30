import {SET_USERNAME, SET_PASSWORD, SET_TOKEN} from '../actions/index.actions';

const defaultState = {
  username: '',
  password: '',
  token: {}
};

const login = (state = defaultState, action) => {
  switch (action.type) {
  case SET_USERNAME: {
    return {...state, username: action.payload};
  }
  case SET_PASSWORD: {
    return {...state, password: action.payload};
  }
  case SET_TOKEN: {
    return {...state, token: action.payload};
  }
  default:
    return state;
  }
};

export default login;
