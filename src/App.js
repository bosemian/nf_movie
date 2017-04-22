//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListMovie from './components/ListMovie';
import Slider from './components/Slider';

// create a component
class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Slider />
                <ListMovie />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131418'
    }
})

//make this component available to the app
export default App;
