import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';
import { BASE_URL } from '../environment';
import { MovieList } from '../components/MovieList';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movies',
  };
  
  render() {
    const {navigate} = this.props.navigation;
    /* No longer required due to navigationOptions
        <Appbar style={styles.appHeader}>
          <Appbar.Action icon="menu"></Appbar.Action>
          <Appbar.Content title="Movies" titleStyle={styles.appTitle}></Appbar.Content>
        </Appbar>
    */
    return (
      <View>
        <View style={styles.appContent}>
          <MovieList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appHeader: {
    marginTop: Constants.statusBarHeight,
    height: 50,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  appContent: {
    backgroundColor: '#E1F5FE',
  },
});
