import { SAVE_GAME, DELETE_GAME } from '../actions';

const INITIAL_STATE = [
  {
    date: Date.now() + 100,
    gameType: 'tarneeb',
    Omar: [20],
    Amoodaa: [10],
    Liwaa: [2],
    Salman: [2],
    Mighty: [2],
  },
  {
    date: Date.now() + 2,
    Omar: [20],
    Amoodaa: [10],
    Liwaa: [2],
    Salman: [2],
    Mighty: [2],
  },
];

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SAVE_GAME:
      // payload looks like { oldGameState: { date: Date.now(), -players info- } }
      return [...state, { ...payload }];
    case DELETE_GAME:
      // payload looks like { oldGameState: { date: Date.now(), -players info- } }
      return state.filter(e => e !== payload);
    default:
      return state;
  }
};
