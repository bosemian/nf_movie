//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
// create a component
class Search extends Component {

    state = {
        text: ''
    }

    filter = (text) => {

    }
    
    render() {
        console.log('search')
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextInput
                        style={styles.input}
                        value={this.state.text}
                        onChangeText={this.filter}
                        placeholder="Search"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent" />
                    <TouchableWithoutFeedback style={styles.cancelBtn}>
                        <View style={styles.containerBtn}>
                            <Text style={styles.cancelBtnText}>Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 50,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3A3A3A',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: width - (width / 4),
        height: 37,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 25,
        paddingBottom: 10,
        borderRadius: 3
    },
    cancelBtnText: {
        color: '#FFF'
    },
});

//make this component available to the app
export default Search;
