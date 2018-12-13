import React, { Component } from 'react';
import { NavigatorIOS, View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

export default class NavigatorIOSBasics extends Component {
  render() {
    return (
      <NavigatorIOS 
      initialRoute={{
        component: MyScreen, 
        title: 'My initial Screen', 
        passProps: {index: 1
        }}}
        style={{flex: 1}}></NavigatorIOS>
    )
  }
}


class MyScreen extends Component {
  static propType = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    // this._onFoward = this._onFoward.bind(this);
  }
  _onFoward() {
    let index = ++this.props.index;
    this.props.navigator.push({
      component: MyScreen,
      title: 'Screen' + index,
      passProps: { index }
    });
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 100}}>
        <Text>Current Screen: { this.props.title }</Text>
        <Button onPress={this._onFoward} title='Tap me to load the next scene'></Button>
      </View>
    )
  }
}