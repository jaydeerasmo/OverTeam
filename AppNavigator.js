import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import StartScreen from './screens/StartScreen';
const AppStack = createStackNavigator({Start: StartScreen});

export default createAppContainer(createSwitchNavigator({
    App: AppStack
  })
);
