import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class MyButton extends Component {
  setNativeProps = (navi) => {
    this._root.setNativeProps(navi);
  }
  render() {
    return (
      <View ref={componet => this._root = componet} {...this.props}>
        <Text> {this.props.label} </Text>
      </View>
    );
  }
}

export default class SetNativPopsBasics extends Component {
  render() {
    return (
      <TouchableOpacity style={{top: 100}}>
          <MyButton label='Press Me!'></MyButton>
      </TouchableOpacity>
    );
  }
}
