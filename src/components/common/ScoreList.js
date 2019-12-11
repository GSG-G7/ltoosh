import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Fontisto';

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', height: 45 },
  clickersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  scoresContainer: { flex: 1 },
  playerName: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    backgroundColor: 'grey',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 16,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  oneRow: { flex: 1, flexDirection: 'row' },
  clicker: {
    paddingLeft: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  clickerText: { flex: 1, fontSize: 24 },
});
const Card = ({ text }) => (
  <View style={styles.card}>
    <Text style={{ fontSize: styles.card.fontSize }}>{text}</Text>
  </View>
);
const Clicker = ({ onSubmit }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.clicker}>
      <TextInput
        style={styles.clickerText}
        defaultValue="0"
        onChangeText={txt => setCount(+txt)}
        keyboardType="number-pad"
      />
      <View style={{ flex: 1 }}>
        <Icon name="plus-a" size={20} onPress={() => onSubmit(+count)} />
        <Icon name="minus-a" size={20} onPress={() => onSubmit(-count)} />
      </View>
    </View>
  );
};
const ScoreListHeader = ({ playerNames }) => (
  <View style={styles.header}>
    {playerNames.map(playerName => (
      <View key={`playerName:${playerName}`} style={styles.playerName}>
        <Text style={{ fontSize: styles.playerName.fontSize }}>{playerName}</Text>
      </View>
    ))}
  </View>
);

const ScoresScrollView = ({ scores }) => {
  const formatList = lists => {
    const max = lists.reduce((acum, arr) => Math.max(arr.length, acum), 0);
    const formatted = new Array(max).fill([]).map(() => new Array(scores.length).fill(''));
    lists.forEach((list, inner) =>
      list.forEach((e, outer) => {
        if (!formatted[outer]) formatted[outer] = [];
        formatted[outer][inner] = e;
      })
    );
    return formatted;
  };
  return (
    <View style={styles.scoresContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.scoresContainer}>
          {formatList(scores).map((row, i) => (
            <View style={styles.oneRow} key={`Row(${i + 1}`}>
              {row.map((
                text,
                j // [10, 2, 2, 2, 2]
              ) => (
                <Card key={`Card(${i + 1},${j + 1})`} text={text} />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const ClickersList = ({ playerNames, updatePlayerScore }) => (
  <View style={styles.clickersContainer}>
    {playerNames.map(playerName => (
      <Clicker
        key={`clicker:${playerName}`}
        onSubmit={ammount => updatePlayerScore({ name: playerName, scoreChange: ammount })}
      />
    ))}
  </View>
);

const ScoreList = ({
  style,
  editable,
  gameState: { date, gameType, ...gameState },
  updatePlayerScore,
}) => {
  const playerNames = Object.keys(gameState);
  const scores = Object.values(gameState);
  return (
    <View style={{ ...styles.container, ...style }}>
      <ScoreListHeader playerNames={playerNames} />
      {editable && <ClickersList playerNames={playerNames} updatePlayerScore={updatePlayerScore} />}
      <ScoresScrollView scores={scores} />
    </View>
  );
};

export default ScoreList;
