// New Game
export const SAVE_GAME = 'SAVE_GAME';

const saveGame = payload => ({
  type: SAVE_GAME,
  payload,
});

export const saveGameAction = oldGameState => dispatch => {
  dispatch(saveGame({ date: Date.now(), ...oldGameState }));
};
