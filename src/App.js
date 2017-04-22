//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListMovie from './components/ListMovie';

// create a component
class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ListMovie />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50'
    }
})

//make this component available to the app
export default App;
