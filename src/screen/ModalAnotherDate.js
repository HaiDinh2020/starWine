import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'

const ModalAnotherDate = ({ isVisibleCalendar, date, chooseDate, changeModalCalendarVisible }) => {

    const today = new Date();
    const minDate = today.toISOString().split('T')[0];

    const handleCancel = () => {
        const newDate = new Date();
        const today = newDate.toISOString().slice(0, 10)
        chooseDate(today)
        changeModalCalendarVisible();
    }

    const handleOk = () => {
        changeModalCalendarVisible();
    }
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={isVisibleCalendar}
        >
            <View style={styles.centeredView}>

                <Calendar
                    onDayPress={day => {
                        chooseDate(day.dateString);
                    }}
                    minDate={minDate}
                    markedDates={{
                        [date]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
                <View style={styles.confirm}>
                    <Pressable onPress={handleCancel} style={styles.pressable}>
                        <Text>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={handleOk} style={styles.pressable}>
                        <Text>OK</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ModalAnotherDate

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    confirm: {
        flexDirection: 'row'
    },
    pressable: {
        margin: 10,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#76b5c5'
    }
})