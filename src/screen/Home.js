import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalFilter from './ModalFilter';
import MapStarWine from './MapStarWine';

const Home = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [marker, setMarker] = useState(
        [
            {
                "id": 3995,
                "lat": 35.227495,
                "lng": -80.8737408,
                "name": "Counter-",
                "slug": "counter",
                "main_award": null,
                "is_white_star": true,
                "today_hours": [
                    {
                        "open": [
                            "18",
                            "00"
                        ],
                        "close": [
                            "22",
                            "00"
                        ]
                    }
                ]
            },
    ]);

    const changeModalVisible = () => {
        setModalVisible(!modalVisible)
    }

    const changeMarker = (listMarker) => {
        setMarker(listMarker)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Text> search star wine</Text>
                </TouchableOpacity>
                <ModalFilter modalVisible={modalVisible} changeModalVisible={changeModalVisible} changeMarker={changeMarker} />

            </View>
            <View style={styles.mapView} >

                <MapStarWine marker={marker} />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4ae68'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapView: {
        flex: 9,
        backgroundColor: '#f4ae68',
        justifyContent: 'center',
        alignItems: 'center'
    },
   
})