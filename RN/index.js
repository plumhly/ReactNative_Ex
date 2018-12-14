import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';

export default class RNHighSores extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // var content = this.props['scores'].map((score) => (
    //   <Text key={score.name}>
    //     {score.name} : {score.value}
    //     {'\n'}
    //   </Text>
    // ));
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}> 2048 High Scores! </Text>
        <Text style={styles.scores}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})


AppRegistry.registerComponent('RNHighSores', () => RNHighSores);