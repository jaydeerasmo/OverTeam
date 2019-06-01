import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import * as Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

export default class TeamListScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
    headerStyle: {
      backgroundColor: Colors.MEDIUM_GREY,
      shadowColor: "#000",
      shadowOffset: {
	       width: 0,
	        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
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
