import { StyleSheet, View, TextInput, Text } from 'react-native';
import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    runOnJS,
} from 'react-native-reanimated';
const RangeSlider = ({ filterTime, sliderWidth, min, max, step, onValueChange }) => {
    const position = useSharedValue(0);
    const position2 = useSharedValue(sliderWidth);
    const zIndex = useSharedValue(0);
    const zIndex2 = useSharedValue(0);
   
    const gestureHandler = Gesture.Pan()
        .onChange((e) => {
            if (position.value + e.changeX < 0) {
                position.value = 0;
            } else if (position.value + e.changeX > position2.value) {
                position.value = position2.value;
                zIndex.value = 1;
                zIndex2.value = 0;
            } else {
                position.value = position.value + e.changeX
            }
            runOnJS(onValueChange)({
                min:
                    min +
                    Math.floor(position.value / (sliderWidth / ((max - min) / step))) *
                    step,
                max:
                    min +
                    Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
                    step,
            });
        })

    const gestureHandler2 = Gesture.Pan()
        .onChange((e) => {
            if (position2.value + e.changeX > sliderWidth) {
                position2.value = sliderWidth;
            } else if (position2.value + e.changeX < position.value) {
                position2.value = position.value;
                zIndex.value = 0;
                zIndex2.value = 1;
            } else {
                position2.value = position2.value + e.changeX
            }
            runOnJS(onValueChange)({
                min:
                    min +
                    Math.floor(position.value / (sliderWidth / ((max - min) / step))) *
                    step,
                max:
                    min +
                    Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
                    step,
            });
        })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
        zIndex: zIndex.value,
    }));

    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [{ translateX: position2.value }],
        zIndex: zIndex2.value,
    }));

    const sliderStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
        width: position2.value - position.value,
    }));

    const changeStyleTime = (num) => {
        const hour = Math.floor(num / 100/3600);
        const minute = Math.floor((num % (3600)/60));
        return `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`;
    }

    return (
        <View>
            {
                filterTime == "custom" &&

                <View style={[styles.sliderContainer, { width: sliderWidth }]}>
                    <View style={[styles.sliderBack, { width: sliderWidth }]} />
                    <Animated.View style={[sliderStyle, styles.sliderFront]} />
                    <GestureDetector gesture={gestureHandler}>
                        <Animated.View style={[animatedStyle, styles.thumb]}>
                            <Text style={styles.labelText}>
                                {
                                    changeStyleTime(min + Math.floor(position.value / (sliderWidth / ((max - min) / step))) * step)
                                }
                            </Text>
                        </Animated.View>
                    </GestureDetector>
                    <GestureDetector gesture={gestureHandler2}>
                        <Animated.View style={[animatedStyle2, styles.thumb]}>
                            <Text style={styles.labelText}>
                                {
                                    changeStyleTime(min + Math.floor(position2.value / (sliderWidth / ((max - min) / step))) * step)
                                }
                            </Text>
                        </Animated.View>
                    </GestureDetector>
                </View>
            }
        </View>
    );
};

export default RangeSlider;

const styles = StyleSheet.create({
    sliderContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    sliderBack: {
        height: 8,
        backgroundColor: '#DFEAFB',
        borderRadius: 20,
    },
    sliderFront: {
        height: 8,
        backgroundColor: 'red',
        borderRadius: 20,
        position: 'absolute',
    },
    thumb: {
        left: -25,
        width: 50,
        height: 30,
        position: 'absolute',
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelText: {
        left: 3,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10,
        width: '100%',
        alignSelf: 'center'
    },
});