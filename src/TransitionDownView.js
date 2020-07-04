import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class TransitionDownView extends Component {

    state = {
        moveAnim: new Animated.Value(1)
    }
   
    componentDidMount = () => {
      Animated.timing(
        this.state.moveAnim,
        {
          toValue: 0,
          duration: 3000,
        }
      ).start();
    }
  
    render() {
      return (
        <Animated.View
          style={{
            ...this.props.style,
            transform: [{
              translateY: this.state.moveAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [270, 0] 
              }),
            }],
          }}        
        >
          {this.props.children}
        </Animated.View>
      );
    }
}