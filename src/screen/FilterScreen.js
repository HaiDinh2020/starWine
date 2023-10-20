import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FilterDay from './FilterDay'
import FilterTime from './FilterTime'
import AnotherDate from './AnotherDate'
import RangeSlider from './RangeSlider'
import CustomButton from '../component/CustomButton'
import axios from 'axios'

const FilterScreen = ({ changeModalVisible, changeMarker }) => {

    const MIN_TIME = 900*3600;
    const MAX_TIME = 2300*3600;
    const secondToMinute = (num) => {
        const hour = Math.floor(num /3600/100);
        const minute = Math.floor((num % (3600)/60));
        const time =  `${hour < 10 ? '0' : ''}${hour}${minute < 10 ? '0' : ''}${minute}`;
        return Number(time);
    }

    const newDate = new Date();
    const today = newDate.toISOString().slice(0,10)
    const [filterDay, setFilterDay] = useState("today");
    const [filterTime, setFilterTime] = useState("open-now");
    const [date, setDate] = useState(today);
    const [timeStart, setTimeStart] = useState(secondToMinute(MIN_TIME));
    const [timeEnd, setTimeEnd] = useState(secondToMinute(MAX_TIME));

    const chooseDate = (anotherDate) => {
        setDate(anotherDate)
    }
    const changeDay = (day) => {
        setFilterDay(day)
    }

    const changeTime = (time) => {
        setFilterTime(time)
    }

    const handleChangeDate = () => {
        if(filterDay == "today") {
            const today = new Date();
            setDate(today.toISOString().slice(0, 10))
        } else if( filterDay == "tomorrow") {
            const today = new Date();
            const tomorrow = new Date(today.getTime() + 24*3600*1000);
            setDate(tomorrow.toISOString().slice(0, 10))
        }
    }

    const handleSearch = () => {
        handleChangeDate();
        try {
            axios.get('https://starwinelist.com/api/map/venues', {
                params: {
                    time_range: `${timeStart},${timeEnd}`,
                    date: date,
                    time_tab: filterTime,
                    day_tab: filterDay,
                    time_start: timeStart,
                    time_end: timeEnd,
                    browser_utc: 420
                }
            })
                .then(response => {
                    // Xử lý dữ liệu trả về thành công
                    const data = response.data;
                    changeMarker(data.data)
                })
                .catch(error => {
                    // Xử lý lỗi
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
        changeModalVisible();
    }

    useEffect(() => {
        if (filterTime == "open-now" && filterDay != "today") {
            changeDay("today")
        } 
    }, [filterTime])

    useEffect(() => {
        
        if(filterDay != "today" && filterTime == "open-now") {
            changeTime("lunch")
        }
    }, [filterDay])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Filter to see which places are open</Text>
            </View>
            <View style={styles.filterView}>
                <FilterDay filterDay={filterDay} changeDay={changeDay} />
                <FilterTime filterTime={filterTime} changeTime={changeTime} />
                <RangeSlider
                    filterTime={filterTime}
                    sliderWidth={250}
                    min={MIN_TIME}
                    max={MAX_TIME}
                    step={60}
                    onValueChange={range => {
                        setTimeStart(secondToMinute(range.min));
                        setTimeEnd(secondToMinute(range.max));
                    }}
                />
                <AnotherDate filterDay={filterDay} date={date} chooseDate={chooseDate} />
            </View>
            <View style={styles.search}>
                <CustomButton onPress={handleSearch} text={"Search"} type={"SECONDARY"} />
            </View>
        </SafeAreaView>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    container: {
        width: 320,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        height: 550,
        backgroundColor: 'white'
    },
    titleView: {
        flex: 2,
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    filterView: {
        flex: 7,
        width: '100%'
    },
    search: {
        bottom: 0,
        paddingHorizontal: 20,
        marginBottom: 10
    }
})