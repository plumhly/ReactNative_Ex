
import React, { Component } from 'react';
import { View, TextInput, Text }from 'react-native';

export default class TextInputBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return(
      <View style={{padding: 10}}>
        <TextInput placeholder='type there' onChangeText={(text) => this.setState({text})}></TextInput>
        <Text style={{padding: 10, fontSize: 42}}>
        {this.state.text.split(' ').map(world => world && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}