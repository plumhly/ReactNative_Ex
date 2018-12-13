import React, { Component } from 'react';
import { View, Text , NativeModules, TouchableOpacity, LayoutAnimation, StyleSheet } from 'react-native';

//just for android

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

export default class LayoutAnimationBasics extends Component {
 
  state = {
    width: 100,
    height: 100,
  }

  _onPress = () => {
    LayoutAnimation.spring();
    this.setState({width: this.state.width + 15, height: this.state.height + 15});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.width, height: this.state.height}]}>
          <TouchableOpacity onPress={this._onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Press Me!</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'red',
    width: 200,
    height: 200
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})