/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import './ex/style_ex';
import './ex/size_ex';
import './ex/flexbox_ex';
import './ex/textinput_ex';
import './ex/button_ex';
import './ex/scrollView_ex';
import './ex/list_ex';
import './ex/fetch_ex';
import './ex/ios/navigatorIOS_ex';
import './ex/image_ex';
import './ex/animated_ex';
import './ex/layoutAnimation_ex';
import './ex/setNativeProp_ex';
import './ex/native_ex';
import './ex/plmapView';
import './ex/component_ex/ActivityIndicator_ex'
import './ex/component_ex/DatePickerIOS_ex'
import './ex/component_ex/FlatList_ex'
import './ex/component_ex/MaskedViewIOS_ex'
import './ex/component_ex/Picker_ex'
import './ex/component_ex/SnapshotView_ex'

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import ScrollViewBasics from './ex/scrollView_ex';
import SectionListBasics from './ex/list_ex';
import FetchBasics from './ex/fetch_ex';
import NavigatorIOSBasics from './ex/ios/navigatorIOS_ex';
import ImageBasics from './ex/image_ex';
import AnimatedBascis from './ex/animated_ex';
import LayoutAnimationBasics from './ex/layoutAnimation_ex';
import SetNativPopsBasics from './ex/setNativeProp_ex';
import NativeBasics from './ex/native_ex';
import PlmapView from './ex/plmapView';
import ActivityIndicatorBasics from './ex/component_ex/ActivityIndicator_ex';
import DatePickerIOSBasics from './ex/component_ex/DatePickerIOS_ex';
import FlatListBasics from './ex/component_ex/FlatList_ex';
import MaskedViewIOSBasics from './ex/component_ex/MaskedViewIOS_ex';
import ModalBasics from './ex/component_ex/Model_ex';
import PickerBasics from './ex/component_ex/Picker_ex';
import SnapshotViewIOSBasics from './ex/component_ex/SnapshotView_ex';




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  onPress() {
    console.log(this.props.name);
  }

  render() {

    var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    };

    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      // <LotsOfStyles></LotsOfStyles>
      <View style={styles.container1}>
        {/* <FlatListBasics data={
          [
            {"id": 1, "title": "1"}, 
            {"id": 2, "title": "2"}, 
            {"id": 3, "title": "3"}, 
            {"id": 4, "title": "4"}, 
            {"id": 5, "title": "5"}, 
          ]}></FlatListBasics> */}
          {/* <MaskedViewIOSBasics></MaskedViewIOSBasics> */}
          {/* <ModalBasics ref={() => console.log("我被加载了")}></ModalBasics> */}
          {/* <PickerBasics></PickerBasics> */}
          <SnapshotViewIOSBasics></SnapshotViewIOSBasics>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'gray'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    alignItems: 'center',
    top: 100
  }
});
