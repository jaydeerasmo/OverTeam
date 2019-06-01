import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import TeamListScreen from './screens/TeamListScreen';
import NewTeamScreen from './screens/NewTeamScreen';
import TeamStatsScreen from './screens/TeamStatsScreen';

const AppStack = createStackNavigator({NewTeam: NewTeamScreen, TeamList: TeamListScreen, TeamStats: TeamStatsScreen });

export default createAppContainer(createSwitchNavigator({
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
)
);
