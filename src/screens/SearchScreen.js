import React, { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { Flow } from 'react-native-animated-spinkit';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, errMessage, results] = useResults();
  
  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12'
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  const filterResultsByPrice = (price) => {
    return results.filter((results) => results.price === price);
  };

  if (!results.length) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Flow size={80} color={'red'} />
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errMessage ? (
        <Text
          style={{
            ...styles.textStyle,
            color: 'red',
            fontWeight: 'light',
            fontSize: 14,
          }}
        >
          {errMessage}
        </Text>
      ) : null}
      {/* <Text style={styles.textStyle}>
        We have found {results.length} results.
      </Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
          //   navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Bit Pricier'
          //   navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
          //   navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //   alignItems: 'center',
    backgroundColor: 'white',
    fontFamily: "Inter-SemiBoldItalic"
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    fontFamily: "sans-serif"
  },
});

export default SearchScreen;
