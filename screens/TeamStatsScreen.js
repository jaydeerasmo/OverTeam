import React from 'react';
import {View, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import * as Colors from '../constants/Colors';
import * as Overwatch from '../components/Overwatch';
import StatCard from '../components/StatCard';

export default class TeamStatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Team Stats',
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
      error: null,
      teamStats: []
    }
  }

  getStats = async() => {
    const team = this.props.navigation.getParam('team', []);
    const platform = this.props.navigation.getParam('platform', 'pc');
    let stats = [];

    for(var i = 0; i < team.length; i++){
        await Overwatch.getProfile(platform, team[i]).then((res) => {
          stats[i] = res;
        });
    }

    this.setState({
      teamStats: stats,
      loading: false
    });
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
    else{
      return(
        <View style = {styles.container}>
          <ScrollView>
            <StatCard
              team={this.state.teamStats}
              stat="averageDamage"
            />
            <StatCard
              team={this.state.teamStats}
              stat="averageHealing"
            />
            <StatCard
              team={this.state.teamStats}
              stat="averageElims"
            />
          </ScrollView>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.DARK_GREY,
    }
});
