import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation}) => {
  return (
    <Onboarding
    onDone={(() => navigation.navigate('Search'))}
    onSkip={(() => navigation.navigate('Search'))}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/simple1.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
      
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/simple2.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/simple3.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
  ]}
/>
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

export default OnboardingScreen;