// New Game
export const SAVE_GAME = 'SAVE_GAME';

const saveGame = payload => ({
  type: SAVE_GAME,
  payload,
});

export const saveGameAction = toBeSavedGameState => dispatch => {
  dispatch(saveGame({ date: Date.now(), ...toBeSavedGameState }));
};

// delete Game
export const DELETE_GAME = 'DELETE_GAME';

const deleteGame = payload => ({
  type: DELETE_GAME,
  payload,
});

export const deleteGameAction = toBedeletedGameState => dispatch => {
  dispatch(deleteGame(toBedeletedGameState));
};
