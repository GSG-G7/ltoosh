import { createStackNavigator } from 'react-navigation-stack';
import ScoreListHistoryScreen from './ScoreListHistoryScreen';
import HistoryScreen from './HistoryScreen';

export default createStackNavigator(
  {
    HistoryScreen,
    ScoreList: ScoreListHistoryScreen,
  },
  { initialRouteName: 'HistoryScreen' }
);
