import React from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import {Button, Input} from 'react-native-elements';
import * as Colors from '../constants/Colors';

export default class NewTeamScreen extends React.Component {
  static navigationOptions = {
    title: 'New Team',
    headerStyle: {
      backgroundColor: Colors.MEDIUM_GREY,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
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

        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 0)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 1)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 2)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 3)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 4)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 5)}
        />

        <Button
          title="Submit Team"
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
    height: 50,
    paddingTop: 2,
    paddingBottom: 2,
    color: "white",
  },
  inputContainer: {
    backgroundColor: Colors.MEDIUM_GREY,
  },
  picker: {
    color: "white",
  },
  submitButton: {

  },
});
