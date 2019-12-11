import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  gameCard: { flex: 1, flexDirection: 'row', padding: 16 },
  info: { flex: 20 },
  arrow: { flex: 1, justifyContent: 'center' },
});
const GameCard = ({ gameState: { date, gameType, ...players } }) => {
  const [winnerName, winnerScores] = Object.entries(players).reduce(
    (acc, [playerName, score]) =>
      score[score.length - 1] > acc[1] ? [playerName, score[score.length - 1]] : acc,
    ['', 0]
  );

  return (
    <View style={styles.gameCard}>
      <View style={styles.info}>
        {gameType && (
          <View>
            <Text>{`${gameType}`}</Text>
          </View>
        )}
        <View>
          <Text style={{ fontSize: 22 }}>
            {winnerName} - {winnerScores}
          </Text>
        </View>
        <View>
          <Text>{new Date(date).toDateString()}</Text>
        </View>
      </View>
      <View style={styles.arrow}>
        <Icon name="caret-right" />
      </View>
    </View>
  );
};
const HistoryList = ({ history, navigation: { push } }) => {
  const renderItem = ({ item: gameState }) => (
    <TouchableOpacity onPress={() => push('ScoreList', gameState)}>
      <GameCard gameState={gameState} />
    </TouchableOpacity>
  );
  const ItemSeperator = () => (
    <View
      style={{
        width: '97%',
        alignSelf: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
      }}
    />
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={({ date }) => `${date}`}
        ItemSeparatorComponent={ItemSeperator}
      />
    </View>
  );
};

export default HistoryList;
