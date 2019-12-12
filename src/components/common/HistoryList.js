import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  gameCard: { flex: 1, flexDirection: 'row', padding: 16 },
  info: { flex: 8, marginRight: 10 },
  iconView: { flex: 1, justifyContent: 'center' },
  icon: { fontSize: 22 },
});
const GameCard = ({ gameState: { date, gameType, ...players }, deleteGame }) => {
  const [winnerName, winnerScores] = Object.entries(players).reduce(
    (acc, [playerName, score]) =>
      score[score.length - 1] > acc[1] // checks the final score of the prev player with the max player
        ? [playerName, score[score.length - 1]]
        : acc,
    ['No winner?', 0]
  );

  return (
    <View style={styles.gameCard}>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={deleteGame}>
          <Icon name="trash" style={styles.icon} color="#2f86e8" />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        {gameType ? (
          <View>
            <Text>{`${gameType}`}</Text>
          </View>
        ) : null}
        <View>
          <Text style={{ fontSize: 22 }}>
            {winnerName} - {winnerScores}
          </Text>
        </View>
        <View>
          <Text>{new Date(date).toDateString()}</Text>
        </View>
      </View>
      <View style={styles.iconView}>
        <Icon name="caret-right" style={styles.icon} />
      </View>
    </View>
  );
};
const HistoryList = ({ history, navigation: { push }, deleteGame }) => {
  const renderItem = ({ item: gameState }) => (
    <TouchableOpacity onPress={() => push('ScoreList', gameState)}>
      <GameCard gameState={gameState} deleteGame={() => deleteGame(gameState)} />
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
