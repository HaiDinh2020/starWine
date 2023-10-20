import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../component/CustomButton'

const FilterTime = ({filterTime, changeTime}) => {
    const handleNow = () => {
        changeTime("open-now")
    }
    const handleLunch = () => {
        changeTime("lunch")
    }
    const handleDinner = () => {
        changeTime("dinner")
    }
    const handleCustom = () => {
        changeTime("custom")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.item}>Pick a time</Text>
            <View style={styles.dayItem} >
                <CustomButton onPress={handleNow} text={"Open now"} type={filterTime == "open-now" ? "SECONDARY": "PRIMARY"} />
                <CustomButton onPress={handleLunch} text={"Lunch"} type={filterTime == "lunch" ? "SECONDARY": "PRIMARY"}/>
                <CustomButton onPress={handleDinner} text={"Dinner"} type={filterTime == "dinner" ? "SECONDARY": "PRIMARY"}/>
                <CustomButton onPress={handleCustom} text={"Choose your time"} type={filterTime == "custom" ? "SECONDARY": "PRIMARY"}/>
            </View>
        </View>
    )
}

export default FilterTime

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    item: {
        color: 'black',
        fontSize: 16
    },
    dayItem: {
        flexWrap:'wrap',
        flexDirection: 'row'
    },
})