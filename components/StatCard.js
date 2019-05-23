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

  averageDamage(){
    const statList = this.props.team.map(function(player, index){
      return ({
        name: player.name,
        icon: player.icon,
        stat: player.competitiveStats.careerStats.allHeroes.average.allDamageDoneAvgPer10Min * 1000 //CHANGE HARDCODED VALUE TO CONSTANT
      });
    });

    statList.sort(function(player1, player2){
      return player2.stat - player1.stat;
    });

    return statList;
  }

  averageHealing = () => {
    const statList = this.props.team.map(function(player, index){
      return ({
        name: player.name,
        icon: player.icon,
        stat: player.competitiveStats.careerStats.allHeroes.average.healingDoneAvgPer10Min * 1000
      });
    });

    statList.sort(function(player1, player2){
      return player2.stat - player1.stat;
    });

    return statList;
  }

  averageElims = () => {
    const statList = this.props.team.map(function(player, index){
      return ({
        name: player.name,
        icon: player.icon,
        stat: player.competitiveStats.careerStats.allHeroes.average.eliminationsAvgPer10Min * 1000
      });
    });

    statList.sort(function(player1, player2){
      return player2.stat - player1.stat;
    });

    return statList;
  }

  componentDidMount(){
    if(this.props.stat === "averageDamage"){
      this.setState({
        team: this.averageDamage(),
        statName: "Average Damage Per 10",
        loading: false
      });
    }
    else if(this.props.stat === "averageHealing"){
      this.setState({
        team: this.averageHealing(),
        statName: "Average Healing Per 10",
        loading: false
      });
    }
    else if(this.props.stat === "averageElims"){
      this.setState({
        team: this.averageElims(),
        statName: "Average Elims Per 10",
        loading: false
      });
    }
  }

  renderItem = ({item}) =>{
    return (
      <ListItem
        roundAvatar
        containerStyle = {{backgroundColor: Colors.MEDIUM_GREY}}
        name={item.name}
        title={item.name}
        rightTitle={item.stat}
        leftAvatar={{ source: {uri: item.icon} }}
        hideChevron={true}
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
          <Text> {this.state.statName} </Text>
          <FlatList
            data = {this.state.team}
            extraData = {this.state.loading}
            renderItem = {this.renderItem}
            keyExtractor = {(item, index) => item.name}
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
  },
});
