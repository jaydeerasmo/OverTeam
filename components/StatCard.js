import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import * as Colors from '../constants/Colors';

export default class StatCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      error: null,
      statName:"",
      team: [],
    }
  }

  getStat = (props) =>{
    const statList = props.team.map(function(player,index){
      var rawStat;
      if (player.private){
        rawStat = "private";
      }
      else{
        switch (props.stat){
          case "averageDamage":
            rawStat = player.competitiveStats.careerStats.allHeroes.combat.damageDone / player.competitiveStats.careerStats.allHeroes.game.gamesPlayed;
            break;
          case "averageHealing":
            rawStat = player.competitiveStats.careerStats.allHeroes.assists.healingDone / player.competitiveStats.careerStats.allHeroes.game.gamesPlayed;
            break;
          case "averageElims":
            rawStat = player.competitiveStats.careerStats.allHeroes.combat.eliminations / player.competitiveStats.careerStats.allHeroes.game.gamesPlayed;
            break;
        }
        rawStat = rawStat.toFixed(0);
      }
      return({
        name: player.name,
        icon: player.icon,
        stat: rawStat
      });
    });

    statList.sort(this.comparePlayers);

    return statList;
  }

  comparePlayers = (player1, player2) => {
      if(player1.stat === "private"){
        return 1;
      }
      else if(player2.stat === "private"){
        return -1;
      }
      else{
        return player2.stat - player1.stat;
      }
  }

  componentDidMount(){
    var statName;
    if(this.props.stat === "averageDamage"){
      statName = "Average Damage Per Game";
    }
    else if(this.props.stat === "averageHealing"){
      statName = "Average Healing Per Game";
    }
    else if(this.props.stat === "averageElims"){
      statName = "Average Elims Per Game";
    }

    this.setState({
      team:this.getStat(this.props),
      statName: statName,
      loading: false
    });
  }

  renderItem = ({item}) =>{
    return (
      <ListItem
        roundAvatar
        containerStyle = {{backgroundColor: Colors.MEDIUM_GREY}}
        name={item.name}
        title={item.name}
        titleStyle={{color: 'white'}}
        rightTitle={item.stat}
        rightTitleStyle={{color: 'white'}}
        leftAvatar={{ source: {uri: item.icon} }}
        hideChevron={true}
      />
    );
  }

  renderSeparator = () => {
    return (
      <View
        style ={{
          height: 1,
          width: "100%",
          backgroundColor: Colors.DARK_GREY,
        }}
      />
    );
  }

  render(){
    if(this.state.loading){
      return (
        <View style = {styles.container}>

        </View>
      )
    }

    else{
      return(
        <View style = {styles.container}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}> {this.state.statName} </Text>
          <FlatList
            data = {this.state.team}
            extraData = {this.state.loading}
            renderItem = {this.renderItem}
            keyExtractor = {(item, index) => item.name}
            ItemSeparatorComponent = {this.renderSeparator}
          />
        </View>
      );
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex:0,
    backgroundColor: Colors.MEDIUM_GREY,
    margin: 8,
  },
});
