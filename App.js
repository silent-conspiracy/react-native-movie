import {createStackNavigator, createAppContainer} from 'react-navigation';
import { HomeScreen } from './pages/Home';
import { MovieDetailScreen } from './pages/MovieDetail';

const App = createAppContainer(createStackNavigator({
  Home: {screen: HomeScreen},
  MovieDetail: {screen: MovieDetailScreen},
},{
  initialRouteName: 'Home',
}));

export default App;