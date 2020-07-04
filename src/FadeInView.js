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
        delay: 4000,
        toValue: 1,
        duration: 8000,
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