import { connect } from 'react-redux';
import { deleteGameAction } from '../../../redux/actions';
import { HistoryList } from '../../common';

const mapStateToProps = ({ history }) => ({
  history,
});

const mapDispatchToProps = {
  deleteGame: deleteGameAction,
};

const HistoryScreen = {
  screen: connect(mapStateToProps, mapDispatchToProps)(HistoryList),
  navigationOptions: {
    title: 'History',
    headerTitleContainerStyle: { padding: 20, backgroundColor: '#2f86e8' },
  },
};
export default HistoryScreen;
