import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

const AppStack = createStackNavigator({/*insert screens here*/});

export default createAppContainer(createSwitchNavigator({
    App: AppStack
  })
);
