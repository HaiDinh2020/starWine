import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../component/CustomButton'

const FilterDay = ({ filterDay, changeDay }) => {

    const handleToday = () => {
        changeDay("today")
    }
    const handleTomorrow = () => {
        changeDay("tomorrow")
    }
    const handleAnother = () => {
        changeDay("custom")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.item}>Pick a day</Text>
            <View style={styles.dayItem} >
                <CustomButton onPress={handleToday} text={"Today"} type={filterDay == "today" ? "SECONDARY" : "PRIMARY"} />
                <CustomButton onPress={handleTomorrow} text={"Tomorrow"} type={filterDay == "tomorrow" ? "SECONDARY" : "PRIMARY"} />
                <CustomButton onPress={handleAnother} text={"Another date"} type={filterDay == "custom" ? "SECONDARY" : "PRIMARY"} />
            </View>

        </View>
    )
}

export default FilterDay

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    item: {
        color: 'black',
        fontSize: 16
    },
    dayItem: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
})