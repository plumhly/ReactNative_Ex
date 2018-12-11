import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';

export default class ScrollViewBasics extends Component {
  render() {
    return(
      <ScrollView>
        <Text style={{fontSize: 40}}>export default class ScrollViewBasics extends Component</Text>
      </ScrollView>
    );
  }
}