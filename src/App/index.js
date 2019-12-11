import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// redux, redux-presist
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Icon from 'react-native-vector-icons/Fontisto';
import { store, persistor } from '../redux/store';
import { HomeScreen, HistoryScreen } from '../components';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { tabBarIcon: () => <Icon name="home" size={20} /> },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarIcon: () => <Icon name="history" size={20} />,
      },
    },
  },
  { tabBarOptions: { showLabel: false } }
);

const Navigator = createAppContainer(TabNavigator);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);
