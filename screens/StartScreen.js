import React from 'react';
import * as Colors from './constants/Colors';

export default class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
    headerStyle: {
      backgroundColor: Colors.MAIN_GREY
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render(){
    return(
        <View style = {styles.container}>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
