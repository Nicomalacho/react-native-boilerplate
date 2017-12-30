import {combineReducers} from 'redux';
import test from './test.reducer';
import content from './content.reducer';
import notes from './notes.reducer';
import Router from '../../routes';
import userPreferences from './userPreferences.reducer';

const nav = (state, action) => (
  Router.router.getStateForAction(action, state) || state
);

export default combineReducers({
  test,
  content,
  nav,
  notes,
  userPreferences
});
