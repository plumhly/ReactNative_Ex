import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

export default class PickerBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "java"
    };
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        style={{height: 50, width: 100,}}
        onValueChange={(value, index) => {this.setState({language: value})}}
      >
        <Picker.Item label='Java' value='java'></Picker.Item>
        <Picker.Item label='JavaScript' value='js'></Picker.Item>
      </Picker>
    );
  }
}
