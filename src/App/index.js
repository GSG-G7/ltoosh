import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// redux, redux-presist
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import { HomeScreen, HistoryScreen } from '../components';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  History: HistoryScreen,
});

const Navigator = createAppContainer(TabNavigator);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);
