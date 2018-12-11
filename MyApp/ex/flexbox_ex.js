import React, { Component } from 'react';
import { View }from 'react-native'


// export default class FlexDirectionBasics extends Component {
//   render() {
//     return(
//       <View style={{width: 300, height:200, flexDirection: 'column'}}>
//         <View style={{width: 100, height:200, backgroundColor: 'red'}}></View>
//         <View style={{width: 100, height:200, backgroundColor: 'blue'}}></View>
//       </View>
//     )
//   }
// }


export default class JustifyContentBasics extends Component {
  render() {
    return(
      <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "stretch", width: 300, height: 500, backgroundColor: 'gray'}}>
        <View style={{height: 50, backgroundColor: 'red'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
      </View>
    )
  }
}