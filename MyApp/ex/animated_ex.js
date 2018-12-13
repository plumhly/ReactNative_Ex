import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'


class FadeInView extends Component {
  state = {
    fadein: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.fadein, {
      toValue: 1,
      duration: 10000
    }).start()
  }

  render() {
    let { fadein } = this.state;
    console.log(this.state);
    console.log(this.props);
    
    return (
      <Animated.View style={{...this.props.style, opacity: fadein}}>
        {this.props.children}
      </Animated.View>
    )
  };
}

export default class AnimatedBascis extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', alignContent: 'center', paddingTop: 100}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: "center", margin: 10}}>Fade IN</Text>
        </FadeInView>
      </View>
    )
  }
}