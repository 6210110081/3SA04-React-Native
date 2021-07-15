import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Constants from 'expo-constants'

export default function Forecast(props) {
    return (
        <View style={styles.underTextWeather}>
            <Text style={styles.textMain}>{props.main}</Text>
            <Text style={styles.textDescription}>{props.description}</Text>
            <Text style={styles.textC}>{props.temp} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textMain: {
        paddingTop:Constants.statusBarHeight,
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    textDescription: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    textC: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    underTextWeather: {
        flex:1,
        justifyContent: 'space-between'
    }
})