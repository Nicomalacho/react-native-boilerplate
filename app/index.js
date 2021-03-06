import React, {Component} from 'react';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';
import offlineStorage from './utils/offline.utils.js';
import {setToken} from './redux/actions/index.actions.js';
import App from './App.container';

const store = initStore();

// // TODO: Move it to appSetup thunk
// offlineStorage.get(offlineStorage.keys.NOTES).then((notes) => {
//     if (notes && notes.length > 0) {
//         store.dispatch(populateNotes(notes));
//     }
// });

offlineStorage.get(offlineStorage.keys.TOKEN).then((token) => {
  store.dispatch(setToken(token));
});

class NoteTaker extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default NoteTaker;
