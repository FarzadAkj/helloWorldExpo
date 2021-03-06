import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Ball = (props) => {
  return (
    <View style={styles.ball} />
  );
}

const styles = {
  ball: {
    borderRadius: 30,
    height: 60,
    width: 60,
    borderColor: 'rgb(85, 20, 224)',
    backgroundColor: 'rgb(85, 20, 224)',
  }
}

export default Ball;
