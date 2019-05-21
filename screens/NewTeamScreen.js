import React from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
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
      platform: 'xbl',
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
          <Picker.Item label="Xbox" value="xbl"/>
          <Picker.Item label="PC" value="pc"/>
          <Picker.Item label="Playstation" value="psn"/>
        </Picker>

        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          leftIcon = {<Icon name='person-outline' size={24} color='black'/>}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 0)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          leftIcon = {<Icon name='person-outline' size={24} color='black'/>}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 1)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          leftIcon = {<Icon name='person-outline' size={24} color='black'/>}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 2)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          leftIcon = {<Icon name='person-outline' size={24} color='black'/>}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 3)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          leftIcon = {<Icon name='person-outline' size={24} color='black'/>}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 4)}
        />
        <Input
          inputStyle = {styles.textInput}
          containerStyle = {styles.inputContainer}
          leftIcon = {<Icon name='person-outline' size={24} color='black'/>}
          placeholder = "Enter player name"
          onChangeText = {(text) => this.handlePlayer(text, 5)}
        />

        <Button
          title="Submit Team"
          buttonStyle={styles.submitButton}
          onPress={this.submitTeam}
          raised= {true}
        />

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_GREY,
    alignItems:'center'
  },
  textInput: {
    color: "white",

  },
  inputContainer: {
    backgroundColor: Colors.MEDIUM_GREY,
    flex:0,
    margin: 8,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	     height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  picker: {
    alignSelf:'stretch',
    color: "white",
    margin: 8,
    backgroundColor: Colors.MEDIUM_GREY,

  },
  submitButton: {

  },
});
