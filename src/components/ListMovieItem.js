//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

// create a component
class ListMovieItem extends Component {

    renderItem = (item) => {
        return (
            <Image style={styles.movieImage} source={{ uri: item.image }} />
        )
    }

    render() {
        const { movie } = this.props
        return (
            <View>
                <FlatList 
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                    renderItem={({item}) => this.renderItem(item)}
                    data={movie}/>
            </View>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    movieImage: {
        width: 120,
        height: 180
    }
});

//make this component available to the app
export default ListMovieItem;
