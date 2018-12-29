import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Appbar, Card, Title, Paragraph, List } from 'react-native-paper';
import { BASE_URL } from '../environment';

export class MovieDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Movie Detail',
  };

  render() {
    let movie = this.props.navigation.state.params.movie;
    return (
      <ScrollView>
        <Card style={this.props.style} onPress={this.props.onPress}>
          <Card.Cover source={{uri: `${BASE_URL}${movie.imgPath}`}} />
          <Card.Content>
            <Title>{ movie.name }</Title>
          </Card.Content>
          <List.Section title="Description">
            <Text style={styles.paragraph}>{ movie.description }</Text>
          </List.Section>
          <List.Section title="Language">
            <Text style={styles.paragraph}>{ movie.language }</Text>
          </List.Section>
          <List.Section title="Genre">
            <Text style={styles.paragraph}>{ movie.genre.join(', ') }</Text>
          </List.Section>
          <List.Section title="Duration">
            <Text style={styles.paragraph}>{ movie.duration + " mins" }</Text>
          </List.Section>
          <List.Section title="User Rating">
            <Text style={styles.paragraph}>{ movie.userRating }</Text>
          </List.Section>
          <Text style={styles.paragraph}> </Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    paddingLeft: 30,
    paddingRight: 30,
  }
});
