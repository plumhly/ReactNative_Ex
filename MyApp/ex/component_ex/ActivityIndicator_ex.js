import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default class ActivityIndicatorBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' color='blue'></ActivityIndicator>
        <ActivityIndicator size='small' color='green'></ActivityIndicator>
        <ActivityIndicator size='large' color='blue' animating={false} hidesWhenStopped={false}></ActivityIndicator>
        <ActivityIndicator size='small' color='green'></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
})