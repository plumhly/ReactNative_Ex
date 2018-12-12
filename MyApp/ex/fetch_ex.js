import React, { Component } from 'react';
import { FlatList, Text, ActivityIndicator, View } from 'react-native';

export default class FetchBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {

    var request = new XMLHttpRequest();
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }
      
      if (request.status == 200) {
          console.log('success', request.responseText);
      } else {
          console.warn("error");
      }
    
    }

    request.open('GET', 'https://facebook.github.io/react-native/movies.json');
    request.send();

    return fetch('https://facebook.github.io/react-native/movies.json')
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      this.setState({
        isLoading: false,
        dataSource: responseJson["movies"]
      }, () => {

      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, height: 300}}>
          <ActivityIndicator></ActivityIndicator>
        </View>
      )
    }
    return (
      <View style={{width: 200, height: 300}}>
          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title},{item.releaseYear}</Text> }
          keyExtractor={(item, index) => item.id }></FlatList>
        </View>
    )
    
  }
}
