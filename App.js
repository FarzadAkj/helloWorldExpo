import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';

import Ball from './src/Ball';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  componentWillMount() {
    this.firstBallPos = new Animated.ValueXY(0, 0);

    Animated.spring(this.firstBallPos, {
      toValue: { x: 0, y: SCREEN_HEIGHT/2 }
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={this.firstBallPos.getLayout()}>
          <Ball />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
