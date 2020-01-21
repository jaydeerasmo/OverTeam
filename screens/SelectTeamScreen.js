import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import * as Colors from '../constants/Colors';
import GlobalStyles from '../constants/GlobalStyles';
import { Button } from 'react-native-elements';

export default class SelectTeamScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
    headerStyle: GlobalStyles.header,
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

  componentDidMount(){
    try {
      let list = AsyncStorage.getItem("SavedTeams");
      if(list != null){
        this.setState({
          teamList: list,
          loading: false
        });
      }
    }
    catch(error){
      console.log(error);
    }
  }

  render(){
    if(this.state.loading){
      this.getStats();
      return(
        <View style = {styles.container}>
           <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
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
