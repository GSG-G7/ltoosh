import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  addPlayerAction,
  updatePlayerScoreAction,
  saveGameAction,
  clearNamesAction,
} from '../../redux/actions';
import { ScoreList, HomeControls } from '../common';

const HomeScreen = ({ addPlayer, clearNames, saveGame, updatePlayerScore, gameState }) => (
  <View style={{ flex: 1 }}>
    <HomeControls
      style={{ flex: 1 }}
      gameState={gameState}
      addPlayer={addPlayer}
      clearNames={clearNames}
      saveGame={saveGame}
    />
    <ScoreList
      style={{ flex: 9 }}
      editable
      gameState={gameState}
      updatePlayerScore={updatePlayerScore}
    />
  </View>
);

const mapStateToProps = ({ scores: gameState }) => ({
  gameState,
});

const mapDispatchToProps = {
  updatePlayerScore: updatePlayerScoreAction,
  addPlayer: addPlayerAction,
  saveGame: saveGameAction,
  clearNames: clearNamesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
