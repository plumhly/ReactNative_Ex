import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default class FlatListBasics extends React.PureComponent {
  state = {selected: new Map()};
  _keyExtractor = (item, index) => item.id;
  _onPressItem = (id) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return {selected}
    });
  };

  _renderItem = ({item}) => (
    <MyLitstItm 
    id={item.id}
    onPressItem={this._onPressItem}
    selected={!!this.state.selected.get(item.id)}
    title={item.title}
    ></MyLitstItm>
  )
  render() {
    return (
      <FlatList
      style={{flex: 1}}
      data={this.props.data}
      extraData={this.state}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      ></FlatList>
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
      <TouchableOpacity style={{flex: 1, backgroundColor: 'red'}} onPress={this._onPress}>
        <View style={{flex: 1}}>
          <Text style={{color: textColor, justifyContent: "center"}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
