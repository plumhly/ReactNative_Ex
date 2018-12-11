import React, { Component } from 'react';
import { View, Button, Alert, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, TouchableOpacity, Platform, Text, StyleSheet }from 'react-native';

// export default class ButtonBasics extends Component {
//   render() {
//     return (
//       <Button title='nihao' onPress={() => { Alert.alert('you tap me')}}></Button>
//     );
//   }
// }

export default class TouchableBasics extends Component {
  _onTap() {
    Alert.alert('tap');
  }
  _onLongPress() {
    Alert.alert('long Press');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onTap} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onTap}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={this._onTap} background={Platform.OS == 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onTap} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onLongPress={this._onLongPress} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});