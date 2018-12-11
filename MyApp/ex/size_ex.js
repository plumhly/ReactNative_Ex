import React, { Component } from 'react';
import { View }from 'react-native'


/*
export default class FixedDimensionsBasics extends Component {
  render() {
    return (
        <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
    );
  }
}
*/

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 300, height: 300}}>
          <View style={{flex: 1, backgroundColor:'red'}}></View>
          <View style={{flex: 2, backgroundColor:'blue'}}></View>
        </View>
      </View>
    );
  }
}