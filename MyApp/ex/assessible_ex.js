import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AccessibleBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View accessible={true} style={{flex: 1, top: 100}}>
        <Text>Text one</Text>
        <Text>Text one</Text>
      </View>
    );
  }
}
