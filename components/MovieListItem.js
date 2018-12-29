import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { BASE_URL } from '../environment';

export class MovieListItem extends React.Component {
  getShortDescription() {
    return this.props.movie.description && `${this.props.movie.description.slice(0, 100)}...`;
  }

  render() {
    return (
      <Card style={this.props.style} onPress={this.props.onPress}>
        <Card.Cover source={{uri: `${BASE_URL}${this.props.movie.imgPath}`}} />
        <Card.Content>
          <Title>{ this.props.movie.name }</Title>
          <Paragraph>{ this.getShortDescription() }</Paragraph>
        </Card.Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({

});
