import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      alignItems: 'center',
      margin: 20
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20
  }
});

export default SearchScreen;