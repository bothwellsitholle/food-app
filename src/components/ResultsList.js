import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
          >
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  title: {
    //   flex: 1,
    //   margin: 20
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 10,
  },
});

export default withNavigation(ResultsList);
