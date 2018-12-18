import React, { Component } from 'react';
import { View, Text, Button, NativeModules } from 'react-native';


const PlumTest = NativeModules.PlumTest;

export default class NativeBasics extends Component {
  buttonPressed() {
    PlumTest.printName('hello react-native')
  }

  printDate() {
    var date = new Date()
    PlumTest.printDate(date.getTime())
  }

  testCallBack() {
    PlumTest.testCallBack((error, mess) => {
      if (error) {
        console.error(error);
      } else {
        console.log(mess.join(''));
      }
    })
  }

  async testPromiseBlock() {
    try { 
      var value = await PlumTest.testPromissBlock();
      console.log(value);
    } catch (error) {
      console.error(error);
    }
  }
  
  render() {
    return (
      <View style={{flex:1 ,backgroundColor: 'gray', paddingTop: 100, justifyContent: "center"}}>
        <Button onPress={this.buttonPressed} title='Print log' color='blue'/>
        <Button onPress={this.printDate} title='Print Date' color='blue' style={{marginTop: 50}}/>
        <Button onPress={this.testCallBack} title='test call back' color='blue' style={{marginTop: 50}}/>
        <Button onPress={this.testPromiseBlock} title='test promise back' color='blue' style={{marginTop: 50}}/>
      </View>
    );
  }
}
