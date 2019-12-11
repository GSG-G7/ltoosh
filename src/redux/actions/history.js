// New Game
export const SAVE_GAME = 'SAVE_GAME';

const saveGame = payload => ({
  type: SAVE_GAME,
  payload,
});

export const saveGameAction = toBeSavedGameState => dispatch => {
  dispatch(saveGame({ date: Date.now(), ...toBeSavedGameState }));
};
