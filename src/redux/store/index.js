import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers';

// AsyncStorage.getItem('root').then(console.log);
const persistConfig = {
  key: 'primary',
  keyPrefix: '', // the redux-persist default `persist:` doesn't work with some file systems
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// , logger
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
