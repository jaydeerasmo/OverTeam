import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import * as Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

export default class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
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
      teamList: [],
      error: null,
    }
  }


  render(){
    return(
        <View style = {styles.container}>

          <FlatList
            data = {this.state.teamList}
            renderItem = {({item}) => <TeamListItem team={item}/>}
          />
          <Button
            title="New Team"
            buttonStyle = {styles.newTeamButton}
            onPress = {() => {this.props.navigation.navigate("NewTeam")}}
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
  newTeamButton: {
    bottom:0
  }
});
