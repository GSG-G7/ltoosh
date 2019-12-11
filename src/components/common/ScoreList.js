import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Fontisto';
import { updatePlayerScoreAction } from '../../redux/actions';

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, flexDirection: 'row' },
  scoresContainer: { flex: 12 },
  playerName: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    backgroundColor: 'grey',
    width: '100%',
  },
  scoreList: { flex: 10, justifyContent: 'center', alignItems: 'center' },
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
  // container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
});
const Card = ({ text }) => (
  <View style={styles.card}>
    <Text style={{ fontSize: styles.card.fontSize }}>{text}</Text>
  </View>
);
const Clicker = ({ onSubmit }) => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
      }}>
      <TextInput
        style={{ flex: 1, fontSize: 20 }}
        defaultValue="0"
        onChangeText={txt => setCount(+txt)}
        keyboardType="number-pad"
      />
      <View style={{ flex: 1 }}>
        <Icon name="plus-a" size={16} onPress={() => onSubmit(+count)} />
        <Icon name="minus-a" size={16} onPress={() => onSubmit(-count)} />
      </View>
    </View>
  );
};
const ScoreListHeader = ({ playerNames }) => (
  <View style={styles.header}>
    {playerNames.map(playerName => (
      <View style={styles.playerName}>
        <Text style={{ fontSize: styles.playerName.fontSize }}>{playerName}</Text>
      </View>
    ))}
  </View>
);

const ScoresScrollView = ({ scores }) => {
  const formatList = lists => {
    const max = lists.reduce((acum, arr) => Math.max(arr.length, acum), 0);
    const formatted = new Array(max).fill([]).map(() => new Array(scores.length).fill(0));
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
            <View style={styles.oneRow}>
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
const ScoreList = ({ playerNames, scores, updatePlayerScore }) => (
  <View style={styles.container}>
    <ScoreListHeader playerNames={playerNames} />
    <ScoresScrollView scores={scores} />
  </View>
);
const mapStateToProps = ({ scores: data }) => ({
  playerNames: Object.keys(data),
  scores: Object.values(data),
});

const mapDispatchToProps = { updatePlayerScore: updatePlayerScoreAction };

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList);

/* {Object.entries(scores).map(([playerName, scoreArr]) => (
      <OneList
        key={playerName}
        playerName={playerName}
        scoreArr={scoreArr}
        updatePlayerScore={ammount => updatePlayerScore({ name: playerName, scoreChange: ammount })}
        />
        ))} */
// const OneList = ({ playerName, scoreArr, updatePlayerScore }) => (
//   // oneList: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
//   <View style={styles.oneList}>
//     <View style={styles.playerName}>
//       <Text style={{ fontSize: styles.playerName.fontSize }}>{playerName}</Text>
//     </View>
//     <View style={styles.scoreList}>
//       <FlatList
//         keyboardShouldPersistTaps="always"
//         data={scoreArr}
//         renderItem={({ item }) => <Card text={item} />}
//         keyExtractor={(e, i) => `${e}${i}`}
//       />
//     </View>
//     <Clicker onSubmit={updatePlayerScore} />
//   </View>
// );
