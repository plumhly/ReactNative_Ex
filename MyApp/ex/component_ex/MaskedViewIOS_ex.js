import React, { Component } from 'react';
import { View, Text, MaskedViewIOS } from 'react-native';

export default class MaskedViewIOSBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MaskedViewIOS style={{flex: 1, flexDirection: "row", height: "100%"}}
      maskElement={
        <View style={{backgroundColor: 'transparent', flex: 1, justifyContent: "center", alignContent: "center"}}>
          <Text style={{fontSize: 60, fontStyle: 'bold', color: 'black'}}>Basic Mask</Text>
        </View>
      }
      >
      {/**被盖在蒙版之下的元素。可以放置任意元素，例如图片等*/}
        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
      </MaskedViewIOS>
    );
  }
}
