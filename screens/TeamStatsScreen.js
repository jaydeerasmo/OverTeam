import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Colors from '../constants/Colors';
import * as Overwatch from '../components/Overwatch';
import StatCard from '../components/StatCard';

export default class TeamStatsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      teamStats: []
    }
  }

  async getStats(){
    const team = this.props.navigation.getParam('team', []);
    const platform = this.props.navigation.getParam('platform', 'pc');
    let stats = [];

    for(var i = 0; i < team.length; i++){
        await Overwatch.getProfile(platform, team[i]).then((res) => {
          stats[i] = res;
        });
    }

    this.setSate({
      teamStats: stats
    });
  }

  componentDidMount(){
    this.getStats().bind(this);

  }

  render(){
    return(
      <View style = {styles.container}>
        <StatCard
          team={this.state.teamStats}
          stat="averageDamage"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.DARK_GREY,
    }
});
