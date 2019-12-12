import React from 'react';
import { View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const AddPLayerInput = ({ style = {}, addPlayer }) => {
  const [name, setName] = React.useState('');

  return (
    <View style={{ ...style, flexDirection: 'row' }}>
      <View style={{ flex: 2 }}>
        <TextInput
          style={{ borderColor: 'black' }}
          value={name}
          onChangeText={setName}
          placeholder="New player name"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Add Player"
          onPress={() => {
            addPlayer(name);
            setName('');
          }}
        />
      </View>
    </View>
  );
};
const GameControls = ({ style = {}, gameState, clearNames, saveGame }) => {
  const [gameType, setGameType] = React.useState('');

  return (
    <View style={{ ...style, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
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
      </View>
      <View style={{ flex: 1 }}>
        <Button
          style={{ flex: 1 }}
          title="Clear Game"
          onPress={() =>
            Alert.alert('', 'Do you want to clear the names?', [
              {
                text: 'Yes',
                onPress: () => {
                  clearNames();
                  setGameType('');
                },
              },
              { text: 'No', onPress: () => saveGame(gameState) },
            ])
          }
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          style={{ flex: 1 }}
          title="Save Game"
          onPress={() =>
            Alert.alert('', 'Do you want to clear the names?', [
              {
                text: 'Yes',
                onPress: () => {
                  saveGame({ gameType, ...gameState });
                  clearNames();
                  setGameType('');
                },
              },
              { text: 'No', onPress: () => saveGame(gameState) },
            ])
          }
        />
      </View>
    </View>
  );
};
const Header = ({ style = { flex: 1 }, addPlayer, clearNames, saveGame, gameState }) => (
  <View style={style}>
    <AddPLayerInput style={{ flex: 1 }} addPlayer={addPlayer} />
    <GameControls
      style={{ flex: 1 }}
      clearNames={clearNames}
      saveGame={saveGame}
      gameState={gameState}
    />
  </View>
);

export default Header;
