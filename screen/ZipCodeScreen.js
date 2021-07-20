import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Card from 'react-native-card-component'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <Card >
        <View style={styles.flatlist}>
            <TouchableHighlight activeOpacity={0.5} underlayColor="#29b6f6" activeOpacity={0.5} onPress={() => {
                navigation.navigate('Weather', { zipCode: code })
            }}>
                <View style={styles.zipItem}>
                    <Text style={styles.zipPlace}>{place}</Text>
                    <Text style={styles.zipCode}>{code}</Text>
                </View>
            </TouchableHighlight>
        </View>
    </Card>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.view} >
                <Image source={require('../image/weather_dribbble_size.gif')} style={styles.image} />
            </View>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row',
    },
    zipPlace: {
        flex: 1,
        fontSize: 30,
    },
    zipCode: {
        flex: 1,
        fontSize: 25,
    },
    image: {
        width: '80%',
        height: '60%',
    },
    flatlist: {
    },
    view: {
        alignItems: 'center',
        width: '100%'
    }
})