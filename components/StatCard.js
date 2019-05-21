import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class StatCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      error: null,
      team: [],
    }
  }

  averageDamage = () => {
    return this.props.team.map(function(player){
      return player.competitiveStats.careerStats.allHeroes.average.heroDamageDoneAvgPer10Min;
    });
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
    console.log(this.props.team.length);
    if(this.props.stat === "averageDamage"){
      this.setState({
        team: this.averageDamage(),
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

  renderItem = (player) =>{
    return (
      <ListItem
        roundAvatar
        key={player.name}
        title={player.name}
        avatar={{uri:player.icon}}
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
            renderItem = {this.renderItem}
            keyExtractor = {item => item.name}
          />
        </View>
      );
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
