import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import * as Colors from '../constants/Colors';

export default class StatCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      error: null,
      team: [],
    }
  }

  averageDamage(){
    const statList = this.props.team.map(function(player, index){
      return ({
        name: player.name,
        icon: player.icon,
        stat: player.competitiveStats.careerStats.allHeroes.average.heroDamageDoneAvgPer10Min
      });
    });

    statList.sort(function(player1, player2){
      return player1.stat - player2.stat;
    });

    return statList;
  }

  averageHealing = () => {
    return this.props.team.map(function(player){
      return player.competitiveStats.careerStats.allHeroes.average.healingDoneAvgPer10Min;
    });
  }

  averageElims = () => {
    return this.props.team.map(function(player){
      return player.competitiveStats.careerStats.allHeroes.average.eliminationsAvgPer10Min;
    });
  }

  componentDidMount(){
    if(this.props.stat === "averageDamage"){
      let newTeam = this.averageDamage();
      this.setState({
        team: newTeam,
        loading: false
      });
    }
    else if(this.props.stat === "averageHealing"){
      this.setState({
        team: this.averageHealing(),
        loading: false
      });
    }
    else if(this.props.stat === "averageElims"){
      this.setState({
        team: this.averageElims(),
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
