import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { stat } from 'fs';

export default class FlatListBasics extends React.PureComponent {
  state = {selected: (new Map())};
  _keyExtractor = (item, index) => item.id;
  _onPressItem = (id) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return {selected}
    });
  };

  _renderItem = ({item}) => {
    <MyLitstItm 
    id={item.id}
    onPress={this._onPressItem}
    selected={!!this.selected.get(item.id)}
    title={item.title}
    ></MyLitstItm>
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

class MyLitstItm extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  }

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return(
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{color: textColor}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}