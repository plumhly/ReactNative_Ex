import React, { Component } from 'react';
import { View, Button, Share } from 'react-native';

export default class ShareBasics extends Component {
  
  async share() {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React'
      });
  
      if (result.action == Share.sharedAction) {
        if (result.activityType) {
  
        } else {
  
        }
      } else if (result.action == Share.dismissedAction) {
          console.log("dismiss");
          
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  render() {
    return (
      <Button onPress={this.share} title='Click' style={{marginTop: 200}}></Button>
    );
  }
}
