//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dataMovie from './dataMovie.js';

import ListMovieItem from './ListMovieItem.js';

// create a component
class ListMovie extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>MyList</Text>
                <ListMovieItem 
                    movie={dataMovie.shows_first} />
                <Text style={styles.title}>Topics for you</Text>
                <ListMovieItem 
                    movie={dataMovie.shows_second} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: '#FFF'
    }
});

//make this component available to the app
export default ListMovie;
