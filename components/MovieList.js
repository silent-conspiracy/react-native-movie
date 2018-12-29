import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { MovieListItem } from './MovieListItem';
import { BASE_URL } from '../environment';
import { withNavigation } from 'react-navigation';

class MovieListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    let response = await fetch('http://35.247.71.173:3000/movies.json')
    let movies = await response.json();
    this.setState({ 
      movies: movies
    });
  }

  render() {
    return (
      <FlatList 
        style={styles.container}
        data={this.state.movies}
        renderItem={({item}) => {
          return <MovieListItem style={styles.gridItem} movie={item} onPress={() => this.props.navigation.navigate('MovieDetail', {movie: item})} />
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1F5FE',
  },
  gridItem: {
    margin: 15,
  }
});

export var MovieList = withNavigation(MovieListComponent);
