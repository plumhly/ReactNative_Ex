import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableHighlight} from 'react-native';

export default class ModalBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
           visible={this.state.modalVisible}
           transparent={false}
           animationType='slide'
           onRequestClose={
             () => {
               alert('modal will closed')
             }
           }
        >
          <View style={styles.container}>
            <Text>Hello word!</Text>
            <TouchableHighlight style={{backgroundColor: 'red'}} onPress={() => {
              this.setModalVisible(false)
            }}>
              <Text>hide modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableHighlight onPress={() => {this.setModalVisible(true)}}>
          <Text>show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 100
  }
})