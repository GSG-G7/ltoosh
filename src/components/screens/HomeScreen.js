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

  gameState,
}) => {
  const [name, setName] = React.useState('');
  const [gameType, setGameType] = React.useState('');
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={{ flex: 1 }} value={name} onChangeText={setName} />
        <Button
          title="Add Player"
          onPress={() => {
            addPlayer(name);
            setName('');
          }}
        />
        <Button
          title={gameType || 'Game type'}
          onPress={() =>
            Alert.alert(
              'What was this game?',
              'sorry rn there are 3 options, dont worry, this is completely optional',
              [
                {
                  text: 'Tarneeb',
                  onPress: (value = 'Tarneeb') => setGameType(value),
                },
                {
                  text: 'Trix',
                  onPress: (value = 'Trix') => setGameType(value),
                },
                {
                  text: 'Dooka',
                  onPress: (value = 'Dooka') => setGameType(value),
                },
              ]
            )
          }
        />
        <Button
          title="Save Game"
          onPress={() =>
            Alert.alert('', 'Do you want to clear the names?', [
              {
                text: 'Yes',
                onPress: () => {
                  saveGame({ gameType, ...gameState });
                  clearNames();
                },
              },
              { text: 'No', onPress: () => saveGame(gameState) },
            ])
          }
        />
      </View>
      <ScoreList editable gameState={gameState} updatePlayerScore={updatePlayerScore} />
    </View>
  );
};

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
