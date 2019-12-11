import React from 'react';
import { connect } from 'react-redux';
import { View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
  addPlayerAction,
  updatePlayerScoreAction,
  saveGameAction,
  clearNamesAction,
} from '../../redux/actions';
import { ScoreList } from '../common';

const HomeScreen = ({
  addPlayer,
  updatePlayerScore,
  clearNames,
  saveGame,
  playerNames,
  scores,
  gameState,
}) => {
  const [name, setName] = React.useState('');
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={{ flex: 2 }} value={name} onChangeText={setName} />
        <Button style={{ flex: 11 }} title="add player" onPress={() => addPlayer(name)} />
        <Button
          style={{ flex: 11 }}
          title="newGame"
          onPress={() =>
            Alert.alert('', 'Do you want to clear the names?', [
              {
                text: 'Yes',
                onPress: () => {
                  saveGame(gameState);
                  clearNames();
                },
              },
              { text: 'No', onPress: () => saveGame(gameState) },
            ])
          }
        />
      </View>
      <ScoreList
        editable
        playerNames={playerNames}
        scores={scores}
        updatePlayerScore={updatePlayerScore}
      />
    </View>
  );
};

const mapStateToProps = ({ scores: gameState }) => ({
  playerNames: Object.keys(gameState),
  scores: Object.values(gameState),
  gameState,
});

const mapDispatchToProps = {
  updatePlayerScore: updatePlayerScoreAction,
  addPlayer: addPlayerAction,
  saveGame: saveGameAction,
  clearNames: clearNamesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
