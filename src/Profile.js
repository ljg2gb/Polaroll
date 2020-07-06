import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ProfileHeader from './ProfileHeader'
import SavedPhoto from './SavedPhoto'

export default function Profile({ navigation }) {

    const displaySavedPhotos = () => {
        const photos = ["photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo"]
        return photos.map( photo => <SavedPhoto/> )
    }

    return(
        <View>
            <ScrollView>
                <ProfileHeader navigation={navigation}></ProfileHeader>
                <View style={styles.photosContainer}>
                    {displaySavedPhotos()}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    photosContainer: {
        backgroundColor: 'hsl(198, 100%, 42%)', 
        justifyContent: 'center', 
        flex: 1, 
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        marginTop: 5
    }

})