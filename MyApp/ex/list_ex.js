import React, {Component} from 'react';
import { FlatList, SectionList, Text, StyleSheet, View } from 'react-native';

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList data={[
//           {key: 'Devin'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}>
//         </FlatList>
//       </View>
//     )
//   }
// }

export default class SectionListBasics extends Component {
    render() {
      return (
        <View style={styles.container}>
          <SectionList 
          sections={[
            {title: 'D', data: ['Divid']},
            {title: 'J', data: ['James', 'Jne', 'JUNe', 'Jack']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}></SectionList>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 320,
    height: 500
  },
  item: {
    fontSize: 18,
    height: 44,
    padding: 10,
  },
  sectionHeader: {
    backgroundColor: 'rgba(247,247,247,1.0)',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold'
  }
})