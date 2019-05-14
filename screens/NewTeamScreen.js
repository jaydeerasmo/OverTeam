import React from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import * as Colors from '../constants/Colors';

export default class NewTeamScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      platform: 'Select Platform',
      team: [],
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.platform}
          style = {styles.picker}
          onValueChange = {(itemValue, itemIndex) => this.setState({platform: itemValue})}
        >
          <Picker.Item label="Xbox" value="xbl"/>
          <Picker.Item label="PC" value="pc"/>
          <Picker.Item label="Playstation" value="psn"/>
        </Picker>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_GREY,
  }
});
