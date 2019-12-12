import React from 'react';
import { ScoreList } from '../../common';

export default {
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
    title: (gameType ? `${gameType} - ` : '') + new Date(date).toDateString(),
    headerLeftContainerStyle: { backgroundColor: '#2f86e8' },
    headerTitleContainerStyle: { backgroundColor: '#2f86e8' },
  }),
};
