/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import FilterScreen from './src/screen/FilterScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './src/screen/Home';



function App() {
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
     
    <SafeAreaView style={styles.container} >
      {/* <FilterScreen /> */}
      <Home/>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default App;
