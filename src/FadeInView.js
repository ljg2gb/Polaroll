import React, { useRef, useEffect, Component } from 'react';
import { Animated, Text, View } from 'react-native';
import { render } from 'react-dom';

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
        <Animated.View                 // Special animatable View
            style={{
            ...this.props.style,
            opacity: this.state.fadeAnim,         // Bind opacity to animated value
            }}
        >
            {this.props.children}
        </Animated.View>
        );
    }
}