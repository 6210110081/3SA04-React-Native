import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Card from 'react-native-card-component'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Satun', code: '91110' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <View style={styles.bigcard}>
        <View style={styles.row}>
            <Card containerStyle={styles.card}>
                <TouchableHighlight activeOpacity={0.5} underlayColor="#29b6f6" activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Weather', { zipCode: code })
                    }}>
                    <View style={styles.zipItem}>
                        <View style={styles.flex}>
                            <Text style={styles.zipPlace}>{place}</Text>
                        </View>
                        <View style={styles.flex}>
                            <Text style={styles.zipCode}>{code}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </Card>
        </View>
    </View>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../image/bgHome.jpg')} style={styles.bg}>
            <View >
                <View style={styles.view} >
                    <Image source={require('../image/weather_dribbble_size.gif')} style={styles.image} />
                </View>
                <View style={styles.columnEvenly}>
                    <FlatList
                        data={availableZipItems}
                        keyExtractor={item => item.code}
                        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
    },
    bg: {
        width: '100%',
        height: '100%'
    },
    zipItem: {
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
    },
    flex: {
        flex: 1,
        alignItems: 'center',
    },
    zipPlace: {
        fontSize: 30,
    },
    zipCode: {
        fontSize: 25,
    },
    image: {
        width: '90%',
        height: '90%',
    },
    row: {
        width: '95%',
    },
    view: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigcard: {
        margin: 15,
        alignItems: 'center',
    },
    columnEvenly: {
        height: '60%',
        width: '100%',
    },
})