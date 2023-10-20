import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';


const MapStarWine = ({ marker }) => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 21.008255,
                longitude: 105.804747,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {marker.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={{ latitude: marker.lat, longitude: marker.lng }}
                    description={marker.name}
                    title={marker.slug}
                />
            ))}
        </MapView>
    )
}

export default MapStarWine;

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%"
    },
    calloutView: {

    },
    nameMarker: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    },
    status: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold'
    }
})