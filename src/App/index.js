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
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
      },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon name="history" size={20} color={tintColor} />,
      }),
    },
  },
  { tabBarOptions: { showLabel: false, activeTintColor: '#2f86e8' } }
);

const Navigator = createAppContainer(TabNavigator);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);
