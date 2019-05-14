import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import StartScreen from './screens/StartScreen';
import NewTeamScreen from './screens/NewTeamScreen';

const AppStack = createStackNavigator({Start: StartScreen, NewTeam: NewTeamScreen });

export default createAppContainer(createSwitchNavigator({
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
)
);
