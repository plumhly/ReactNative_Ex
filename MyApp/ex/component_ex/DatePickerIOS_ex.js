import React, { Component } from 'react';
import { View, Text, DatePickerIOS } from 'react-native';

export default class DatePickerIOSBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choseDate: new Date()
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    console.log(newDate);
    this.setState({choseDate: newDate});
  }

  render() {
    return (
      <DatePickerIOS date={this.state.choseDate} onDateChange={this.setDate}></DatePickerIOS>
    );
  }
}
