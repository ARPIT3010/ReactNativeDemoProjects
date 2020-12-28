import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ApiDemo from './src/components/ApiDemo';
import ResultShowScreen from './src/screens/ResultShowScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search:SearchScreen,
  Api :ApiDemo,
  Show : ResultShowScreen
},{
  initialRouteName : 'Search',
  defaultNavigationOptions:{
    title:'BusinessSearch'
  }
}
);

export default createAppContainer(navigator);