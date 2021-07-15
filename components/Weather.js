import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './ForeCast'

import Constants from 'expo-constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.view}>
                <Text style={styles.zipcodeText}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </View>
            <View style={styles.empty}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    zipcodeText: {
        fontSize: 20,
        color: 'white'
    },
    view: {
        textAlignVertical:'auto',
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor:'blue'
    },
    empty: {
        flex: 2,
    }
})