import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <View style={styles.elevation}>
        <Image source={{ uri: result.image_url }} style={styles.image} />
      </View>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.ratingStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  nameStyle: {
    fontSize: 15,
    // textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 7,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },

  ratingStyle: {
    color: 'grey',
  },
  elevation: {
    elevation: 10,
    backgroundColor: 'white',
    width: 250,
    height: 150,
    shadowColor: 'black',
    borderRadius: 20,
  },
});

export default ResultsDetail;
