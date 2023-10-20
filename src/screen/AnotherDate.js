import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalAnotherDate from './ModalAnotherDate';

const AnotherDate = ({ filterDay, date, chooseDate }) => {
    const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
    
    const changeModalCalendarVisible = () => {
        setIsVisibleCalendar(!isVisibleCalendar)
    }
    return (
        <View>
            {
                filterDay == "custom" &&
                <View  style={styles.dateInfor}>
                    <TouchableOpacity 
                        style={styles.touchView}
                        onPress={() => {
                            setIsVisibleCalendar(!isVisibleCalendar)
                        }}>
                        <Text style={styles.dateLabel}> Choose the date:</Text>
                        <Text>{date}</Text>
                    </TouchableOpacity>
                    <ModalAnotherDate isVisibleCalendar={isVisibleCalendar} date={date} chooseDate={chooseDate} changeModalCalendarVisible={changeModalCalendarVisible}/>
                </View>
            }
        </View>
    )
}

export default AnotherDate

const styles = StyleSheet.create({
    dateInfor:{
        width: 280,
        height: 50,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        
    },
    touchView: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderColor: 'red',
        borderWidth:2,
        padding: 10,
    },
    dateLabel: {
        fontSize:14
    }
})