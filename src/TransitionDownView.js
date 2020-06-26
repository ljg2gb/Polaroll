import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';
import { render } from 'react-dom';

export default class FadeInView extends Component {

    state = {
        transitionAnim: new Animated.Value(0)
    }
   
    componentDidMount = () => {
      Animated.timing(
        this.state.transitionAnim,
        {
          toValue: 1,
          duration: 10000,
        }
      ).start();
    }
  
    render() {
        return (
        <Animated.View                 // Special animatable View
            style={{
            ...this.props.style,
            opacity: this.state.transitionAnim,         // Bind opacity to animated value
            }}
        >
            {this.props.children}
        </Animated.View>
        );
    }
}