import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Overwatch from '../components/Overwatch';

export default class TeamStatsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      teamStats: []
    }
  }

  getStats = async() => {
    const team = this.props.navigation.getParam('team', []);
    const platform = this.props.navigation.getParam('platform', 'pc');
    let teamStats = [];

    for(var i = 0; i < team.length; i++){
        await Overwatch.getProfile(platform, team[i]).then((res) => {
          teamStats[i] = res;
        });
    }

    this.setSate({
      teamStats: teamStats
    });
  }

  componentDidMount(){
    this.getStats();
  }

  render(){
    return(
      <View style = {styles.container}>

      </View>

    );
  }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
    }
});
