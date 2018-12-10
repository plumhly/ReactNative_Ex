import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.red}>Just Red</Text>
        <Text style={styles.bigBlue}>Only Big Blue</Text>
        <Text style={[styles.red, styles.bigBlue]}>first red then blue</Text>
        <Text style={[styles.bigBlue, styles.red]}>first blue then red</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    top: 200
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})