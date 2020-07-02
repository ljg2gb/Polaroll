import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class FadeInView extends Component {

  state = {
      fadeAnim: new Animated.Value(0)
  }
   
  componentDidMount = () => {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }
  
  render() {
    return (
      <Animated.View style={{...this.props.style, opacity: this.state.fadeAnim}}>
        {this.props.children}
      </Animated.View>
    );
  }
}