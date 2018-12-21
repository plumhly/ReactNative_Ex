import React, { Component } from 'react';
import { View, Text, SnapshotViewIOS} from 'react-native';

export default class SnapshotViewIOSBasics extends Component {
  render() {
    return (
      <SnapshotViewIOS onSnapshotReady={() => console.log('截图成功')}></SnapshotViewIOS>
    );
  }
}
