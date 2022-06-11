import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import yelp from '../api/yelp';
import { SliderBox } from 'react-native-image-slider-box';
import { Flow } from 'react-native-animated-spinkit'

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(result);

  const getResult = async () => {
    try {
      setLoading(true);
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <ActivityIndicator size='large' color="red"  /> */}
        {/* <Spinner size='large' color='red' type='ThreeBounce' /> */}
        <Flow
          size={80}
          color={'red'}
        />
      </View>
    );
  }

  if (!result) {
    return null;
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>{result.name}</Text>
      {/* <FlatList showsVerticalScrollIndicator={false} data={result.photos} keyExtractor={(photo) => photo} renderItem={({item}) => <Image style={styles.imageStyle} source={{uri: item}} />}/> */}
      <SliderBox
        images={result.photos}
        sliderBoxHeight={200}
        style={styles.imageStyle}
        dotColor='#ccce'
        inactiveDotColor='#90A4AE'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    fontFamily: "sans-serif"

  },
  imageStyle: {
    width: 350,
    height: 240,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default ResultsShowScreen;
