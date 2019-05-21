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
    if(this.props.stat === "averageDamage"){
      this.setState({
        team: this.averageDamage()
      });
    }
    else if(this.props.stat === "averageHealing"){
      this.setState({
        team: this.averageHealing()
      });
    }
    else if(this.props.stat === "averageElims"){
      this.setState({
        team: this.averageElims()
      });
    }
  }

  renderItem = ({player}) =>{
    return (
      <ListItem
        roundAvatar
        title={player.name}
        avatar={{uri:player.icon}}
        hideChevron={true}
      />
    );
  }

  render(){
    return(
      <View style = {styles.container}>
        <FlatList
          data = {this.state.team}
          renderItem = {this.renderItem}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
