import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TeamListItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      team: Array(6).fill({name: 'player', icon: {}})
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.itemContainer}>
          <ListItem

          />
          <ListItem

          />
          <ListItem

          />
          <ListItem

          />
          <ListItem

          />
          <ListItem

          />
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{},
  itemContainer:{
      flexDirection: 'row',
      justifyContent: 'space-evenly'
  },
});
