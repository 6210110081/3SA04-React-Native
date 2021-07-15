import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text>Main</Text>
            <Text style={styles.textWeather}>{props.main}</Text>
            <Text style={styles.textWeather}>description</Text>
            <Text style={styles.textWeather}>{props.description}</Text>
            <Text style={styles.textWeather}>{props.temp} °C</Text>
            <Text style={styles.underTextWeather}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textWeather: {
        flex: 1
    },
    underTextWeather: {
        flex: 4
    }
})