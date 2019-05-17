import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import StartScreen from './screens/StartScreen';
import NewTeamScreen from './screens/NewTeamScreen';
import TeamStatsScreen from './screens/TeamStatsScreen';

const AppStack = createStackNavigator({Start: StartScreen, NewTeam: NewTeamScreen, TeamStats: TeamStatsScreen });

export default createAppContainer(createSwitchNavigator({
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
)
);
