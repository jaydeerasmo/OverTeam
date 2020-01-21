import React from 'react';
import * as Colors from '../constants/Colors';
import {StyleSheet} from 'react-native';

const GlobalStyles = StyleSheet.create({
  header: {
    backgroundColor: Colors.MEDIUM_GREY,
    shadowColor: "#000",
    shadowOffset: {
     width: 0,
     height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  }
});

export default GlobalStyles;
