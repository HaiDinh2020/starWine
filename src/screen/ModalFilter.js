import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FilterScreen from './FilterScreen'
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ModalFilter = ({ modalVisible, changeModalVisible, changeMarker }) => {
    const handleCancel = () => {
        changeModalVisible();
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}

        >
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={styles.centeredView}>
                    <FilterScreen changeModalVisible={changeModalVisible} changeMarker={changeMarker} />
                    <View style={styles.cancel}>
                        <Pressable onPress={handleCancel}>
                            <Text>X</Text>
                        </Pressable>
                    </View>
                </View>
            </GestureHandlerRootView>
        </Modal>
    )
}

export default ModalFilter

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    cancel: {
        position: 'absolute',
        top: 45,
        left: 330,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})