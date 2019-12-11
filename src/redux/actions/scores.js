// Add New Player
export const ADD_PLAYER = 'ADD_PLAYER';

const addPlayer = payload => ({
  type: ADD_PLAYER,
  payload,
});

export const addPlayerAction = name => dispatch => {
  dispatch(addPlayer({ [name]: [0] }));
};

// Update Player Score
export const UPDATE_PLAYER_SCORE = 'UPDATE_PLAYER_SCORE';

const updatePlayerScore = payload => ({
  type: UPDATE_PLAYER_SCORE,
  payload,
});

export const updatePlayerScoreAction = ({ name, scoreChange }) => dispatch => {
  dispatch(updatePlayerScore({ [name]: scoreChange }));
};

// Clear Players Name
export const CLEAR_NAMES = 'CLEAR_NAMES';

const clearNames = payload => ({
  type: CLEAR_NAMES,
  payload,
});

export const clearNamesAction = isClear => dispatch => {
  dispatch(clearNames(isClear));
};
