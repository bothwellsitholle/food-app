import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Onboarding: OnboardingScreen
  },
  {
    initialRouteName: 'Onboarding',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
