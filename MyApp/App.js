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
import './ex/assessible_ex';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ScrollViewBasics from './ex/scrollView_ex';
import SectionListBasics from './ex/list_ex';
import FetchBasics from './ex/fetch_ex';
import NavigatorIOSBasics from './ex/ios/navigatorIOS_ex';
import ImageBasics from './ex/image_ex';
import AnimatedBascis from './ex/animated_ex';
import LayoutAnimationBasics from './ex/layoutAnimation_ex';
import AccessibleBasics from './ex/assessible_ex';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      // <LotsOfStyles></LotsOfStyles>
      <View style={styles.container1}>
        <AccessibleBasics></AccessibleBasics>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'red'
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
