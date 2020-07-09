import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ProfileHeader from './ProfileHeader'
import SavedPhoto from './SavedPhoto'

export default class Profile extends Component {

    state = {
        name: '',
        photos: {},
        userInfo: {},
    }

    displaySavedPhotos = () => {
        const { link } = this.props.route.params
        const photos = [
            {
                link: link,
                id: 1
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/2b811d74-ba6c-4a21-a447-f30d998e5c89.JPG?h=c22fe380e8ffb98e10cc5761e352248d',
                id: 2
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/2720da77-cb8b-4e2d-bbde-a3d3e6195876_rw_600.png?h=dc80bbc10d533450298b2a9dd2f30de5',
                id: 3
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/8e18660e-30af-4a49-8cb5-ef88ef895782.jpg?h=968b7eca99a8d3fafa3e56cd14213a24',
                id: 4
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/8156afe7-29c4-4717-9741-658edef3cb33_rw_1920.png?h=fb2647be52be33d79f60594477f6e866',
                id: 5
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf2.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/dd4a9e3c-16eb-42d1-a06c-4c8d93a01733_rw_1920.JPG?h=4ffeb09a4b348d18fb2e75523fc5d1ff',
                id: 6
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/a708a3c8-247f-408c-a56e-bbefa400b1c4_rw_1920.jpg?h=cf176f325905f70c042c3b89f3b8a6a8',
                id: 7
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf3.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/42ea76a5-8b2a-44bb-bede-393600d1e0b4_rw_1920.png?h=46a208b0d67a56ba7509a1bf416b8113',
                id: 8
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/0c7a8744-7337-4383-94d9-a42395b4da67_rw_1920.png?h=72f53fccc7d56428461fe46698391c37',
                id: 9
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf3.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/eb661a09-b884-421d-8862-7dfc942a59d9_rw_1920.png?h=eced721c0a9b8f77f9c1dae1b95682aa',
                id: 10
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/10dce4e6-4c34-466f-bac3-a7dc7ac05d0d_rw_1920.png?h=0af3ccd8f9730834e328e105efdfd22b',
                id: 11
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf5.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/6baaf2d2-be2c-4aeb-b319-04dddd5940b9_rw_1920.JPG?h=e6e7f8b5a83bc75f87dd1d35bae2459c',
                id: 12
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/72a4d7e6-e5bb-41a8-96ea-cfdbe5b08b06_rw_1920.png?h=cf5a4648ebf4327697e366d165d9fb7f',
                id: 13
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/92d77248-1bb7-4881-8bb6-72386f15e43a_rw_1920.jpg?h=9a6922d081e32861e058d45463b2010f',
                id: 14
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf5.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/69cabd58-9cd3-4ea1-8492-aa1b82f3df08_rw_1920.jpg?h=99f605e55d6015efe654d69b96abe697',
                id: 15
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/2e13bbde-92c9-4b02-93a8-cd5686b9efd1_rw_1920.jpg?h=8e30e0605e7b8227cf29e3ee36353701',
                id: 16
            },
            {
                link: 'https://firebasestorage.googleapis.com/v0/b/polaroll.appspot.com/o/images%2F1594269466524?alt=media&token=b2a1013d-8367-443f-a0db-3b475ca4501e',
                id: 17
            },
            {
                link: 'https://firebasestorage.googleapis.com/v0/b/polaroll.appspot.com/o/images%2F1594269589267?alt=media&token=4fcb546d-113c-4ec5-af77-5124c6a156d7',
                id: 18
            },
            {
                link: 'https://firebasestorage.googleapis.com/v0/b/polaroll.appspot.com/o/images%2Fwhtever?alt=media&token=4ed5053a-6584-49be-aa69-5570d1183919',
                id: 19
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/c6e55f83-0f59-4629-9213-e2bf7ff374c8.JPG?h=d68d2b75b79ab713301b6e93420eb2d5',
                id: 20
            },
            {
                link: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/b690a5ad0b481375e56f2ca802e360bc/13e0732a-1ae2-4925-956b-4e99b96fcca5.png?h=d0c6fdbe27f301e772d554d9c3017fbc',
                id: 21
            },
            
        ]
        let result = photos.map( photo => <SavedPhoto link={photo.link} key={photo.id}/> )
        return result
    }

    render() {
        const { navigation } = this.props
        // const { token, name, id } = this.props.route.params
        return(
            <View>
                <ScrollView>
                    <ProfileHeader 
                        navigation={navigation} 
                        // name={name} 
                    ></ProfileHeader>
                    <View style={styles.photosContainer}>
                        {this.displaySavedPhotos()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    photosContainer: {
        backgroundColor: 'rgb(210,220,230)', 
        justifyContent: 'center', 
        flex: 1, 
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        marginTop: 5
    },
     film: {
        backgroundColor: 'white', 
        height: 100, 
        width: '22%', 
        margin: 5
    },

    photo: {
        backgroundColor: 'black', 
        height: 70, 
        width: '90%', 
        position: 'absolute', 
        top: '5%', 
        left: '5%',
    },

})