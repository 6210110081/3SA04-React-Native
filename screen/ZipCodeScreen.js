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
    <View style={styles.card}>
        <View style={styles.row}>
            <Card>
                <TouchableHighlight activeOpacity={0.5} underlayColor="#29b6f6" activeOpacity={0.5} onPress={() => {
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
    )
}

const styles = StyleSheet.create({
    zipItem: {
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
        width: '80%',
    },
    view: {
        height:'30%',
        justifyContent:'center',
        alignItems: 'center',
    },
    card: {
        alignItems: 'center',
        backgroundColor:'green'
    },
    columnEvenly:{
        height:'70%',
        width:'100%',
        backgroundColor:'red'
    }
})