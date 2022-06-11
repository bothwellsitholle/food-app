import React from 'react';
import {TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({onTermChange, term, onTermSubmit}) => {
  return (
    <View style={{elevation: 5, backgroundColor: 'white'}}>
    <View style={styles.backgroundStyle}>
      <Feather name='search'color='black' style={styles.iconStyle}/>
      <TextInput autoCapitalize='none' autoCorrect={false} style={styles.inputStyle} placeholder='Search' value={term} onChangeText={onTermChange} onEndEditing={onTermSubmit}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 8,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginVertical: 10,
    // elevation: 5

  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 10
  }
});

export default SearchBar;
