
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
    },

    h1: {
        fontFamily: "HelveticaNeue-CondensedBold",
        color: 'white',
        fontSize: 60,
        textAlign: 'center'
    },

    h2: {
        fontFamily: "HelveticaNeue-Medium",
        fontSize: 30,
        marginBottom: 5,
        textAlign: "center",
    },
    input: {
        fontFamily: "Courier",
        fontSize: 18,
        borderWidth: 2, 
        borderBottomColor: '#F04733',
        borderRightColor: '#ECA827',
        borderTopColor: '#85BC3D',
        borderLeftColor: '#3490CC',
        margin: 10,
        padding: 5,
        width: 300
    },

    button: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 18,
        borderStyle: 'solid',
        borderWidth: 2,
        margin: 10,
        padding: 5,
        width: 100,
        textAlign: 'center'
    }
})