import {AsyncStorage} from 'react-native';

const keys = {
  'NOTES': 'notes',
  'TOKEN': 'token'
};

const get = (storageKey) => AsyncStorage.getItem(storageKey).then((json) => json ? JSON.parse(json) : {});

const set = (storageKey, data) => AsyncStorage.setItem(storageKey, JSON.stringify(data));

const remove = (storageKey) => AsyncStorage.removeItem(storageKey).then(() => {});

const addNote = async (newNote) => {
  const localNotes = await get(keys.NOTES);
  const newNotes = [...localNotes, newNote];
  return set(keys.NOTES, newNotes);
};

const addToken = async (newToken) => set(keys.TOKEN, newToken);

const deleteToken = async () => remove(keys.TOKEN);

const clear = AsyncStorage.clear;

module.exports = {
  keys,
  set,
  get,
  addNote,
  addToken,
  deleteToken,
  clear
};
