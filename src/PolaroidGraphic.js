import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

import polaroid600 from '../assets/polaroid600.png'
import polroidOneStep from '../assets/polaroidOneStep.png'
import polaroidSX70 from '../assets/polaroidSX70.png'

const polaroids = [polroidOneStep, polaroid600, polaroidSX70]
let currentPolaroidIndex = 0

export default class PolaroidGraphic extends Component {

    state = {
        uniqueValue: 0
    }

    nextPolaroid = () => {
        if (currentPolaroidIndex === 2){
            currentPolaroidIndex = 0
        } else {
            currentPolaroidIndex = ++currentPolaroidIndex
        }
        this.setUniquenessValue()
    }
    
    backPolaroid = () => {
        if (currentPolaroidIndex === 0){
            currentPolaroidIndex = 2
        } else {
            currentPolaroidIndex = --currentPolaroidIndex
        }
        this.setUniquenessValue()
    }
    
    displayCurrentPolaroid = () => {
        return polaroids[currentPolaroidIndex]
    }

    setUniquenessValue = () => {
        this.setState({
            uniqueValue: this.state.uniqueValue + 1
        })
    }

    render() {
        return(
            <View style={styles.main}>

                <TouchableOpacity onPress={() => this.backPolaroid()} >
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>

                <View style={styles.graphicContainer}>
                    <View style={styles.centerCamera} key={this.state.uniqueValue}>
                        <Image style={styles.image} source={this.displayCurrentPolaroid()}></Image>
                    </View>
                </View>

                <TouchableOpacity onPress={() => this.nextPolaroid()} >
                    <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row', 
        alignItems: 'center', 
        zIndex: 500
    },

    graphicContainer: {
        zIndex: 500,
        backgroundColor: 'rgb(210,220,230)',
        height: 260,
    },

    centerCamera: {
        width: 300, 
        height: 260, 
        zIndex: 500,
    },
    image: {
        width: '100%', 
        height: '100%', 
        resizeMode: "contain", 
        zIndex: 500
    }

})