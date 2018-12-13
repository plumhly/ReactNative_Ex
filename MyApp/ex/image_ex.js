import React, { Component } from 'react'
import { Image, ImageBackground, Text } from 'react-native'

//果你有my-icon.ios.png和my-icon.android.png，Packager 就会根据平台而选择不同的文件。
export default class ImageBasics extends Component {
  render() {
    return (
      // <Image source={require('./1.png')}></Image>
      // <Image source={{uri: '2'}} style={{width: 40, height: 40}}></Image>
      <ImageBackground source={require('./1.png')} style={{flex: 1}}>
        <Text>Inside Text</Text>
      </ImageBackground>
    )
  }
}
