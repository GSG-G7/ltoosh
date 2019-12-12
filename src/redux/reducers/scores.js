import { ADD_PLAYER, UPDATE_PLAYER_SCORE, CLEAR_NAMES, SAVE_GAME } from '../actions';

const INITIAL_STATE = {
  Omar: [20, 12, 14],
  Amoodaa: [10],
  Liwaa: [2],
  Salman: [2],
  Mighty: [2],
};
// 10, 20, 30 incremental history!

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_PLAYER:
      // payload looks like {[playerName]: [0]}
      return {
        ...state,
        ...payload,
      };
    case UPDATE_PLAYER_SCORE: {
      // payload looks like {[playerName]: 10 | -10}
      const [[key, value]] = Object.entries(payload);
      const oldValues = state[key];
      const newValue = oldValues[oldValues.length - 1] + +value;
      const newState = { ...state };
      newState[key] = [...oldValues, newValue];
      return newState;

      // return { // buggy code in bundle mode only, debug works fine, can be operated with sort in ScoreList.js:122
      //   ...state,
      //   [key]: [...oldValues, newValue],
      // };
    }
    case SAVE_GAME: {
      return Object.keys(state).reduce((acc, key) => ({ ...acc, [key]: [0] }), {});
    }
    case CLEAR_NAMES:
      return {};
    default:
      return state;
  }
};
