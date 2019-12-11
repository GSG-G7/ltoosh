import React from 'react';
import { connect } from 'react-redux';

import { createStackNavigator } from 'react-navigation-stack';
import { HistoryList, ScoreList } from '../common';

const mapStateToProps = ({ history }) => ({
  history,
});
const HistoryScreen = connect(mapStateToProps, null)(HistoryList);

export default createStackNavigator(
  {
    HistoryScreen: {
      screen: HistoryScreen,
      navigationOptions: {
        title: 'History',
        headerTitleContainerStyle: { padding: 20, backgroundColor: '#2f86e8' },
      },
    },
    ScoreList: {
      screen: ({
        navigation: {
          state: {
            params: { date, gameType, ...gameState },
          },
        },
      }) => <ScoreList gameState={gameState} />,
      navigationOptions: ({
        navigation: {
          state: {
            params: { date, gameType },
          },
        },
      }) => ({
        title: (gameType || '') + new Date(date).toDateString(),
        headerLeftContainerStyle: { backgroundColor: '#2f86e8' },
        headerTitleContainerStyle: { backgroundColor: '#2f86e8' },
      }),
    },
  },
  { initialRouteName: 'HistoryScreen' }
);
