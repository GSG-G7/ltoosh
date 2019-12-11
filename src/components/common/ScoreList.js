import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Fontisto';
import { updatePlayerScoreAction } from '../../redux/actions';

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  oneList: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
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
        defaultValue={`${count}`}
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
const OneList = ({ playerName, scoreArr, updatePlayerScore }) => (
  <View style={styles.oneList}>
    <View style={styles.playerName}>
      <Text style={{ fontSize: styles.playerName.fontSize }}>{playerName}</Text>
    </View>
    <View style={styles.scoreList}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={scoreArr}
        renderItem={({ item }) => <Card text={item} />}
        keyExtractor={(e, i) => `${e}${i}`}
      />
    </View>
    <Clicker onSubmit={updatePlayerScore} />
  </View>
);
const ScoreList = ({ scores, updatePlayerScore }) => (
  <View style={styles.container}>
    {Object.entries(scores).map(([playerName, scoreArr]) => (
      <OneList
        key={playerName}
        playerName={playerName}
        scoreArr={scoreArr}
        updatePlayerScore={ammount => updatePlayerScore({ name: playerName, scoreChange: ammount })}
      />
    ))}
  </View>
);

const mapStateToProps = ({ scores }) => ({
  scores,
});

const mapDispatchToProps = { updatePlayerScore: updatePlayerScoreAction };

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList);
