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

  handlePlayer = (text, id) => {
    let newTeam = this.state.team;
    newTeam[id] = text;
    this.setState({team: newTeam});
  }

  submitTeam = () => {
    this.props.navigation.navigate("TeamStats", {platform: this.state.platform, team: this.state.team});
  }

  render(){
    return(
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.platform}
          style = {styles.picker}
          onValueChange = {(itemValue, itemIndex) => this.setState({platform: itemValue})}
        >
          <Picker.Item label="Xbox" value="Xbox"/>
          <Picker.Item label="PC" value="PC"/>
          <Picker.Item label="Playstation" value="Playstation"/>
        </Picker>

        <TextInput
          style = {styles.textInput}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 0)}
        />
        <TextInput
          style = {styles.textInput}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 1)}
        />
        <TextInput
          style = {styles.textInput}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 2)}
        />
        <TextInput
          style = {styles.textInput}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 3)}
        />
        <TextInput
          style = {styles.textInput}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 4)}
        />
        <TextInput
          style = {styles.textInput}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 5)}
        />

        <Button
          title="Submit Team",
          buttonStyle={styles.submitButton}
          onPress={this.submitTeam}
        />

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_GREY,
  },
  textInput: {

  },
  picker: {

  },
  submitButton: {

  },
});
