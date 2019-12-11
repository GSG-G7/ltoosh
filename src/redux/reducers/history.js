import { SAVE_GAME } from '../actions';

const INITIAL_STATE = [
  {
    date: Date.now(),
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
    default:
      return state;
  }
};
