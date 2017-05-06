//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Logo = `<Image style={styles.logo} source={require('../../images/user.png')} />`

const Header = (props) => {
    return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={() => props.toggle()}>
                    <Icon 
                        name="bars"
                        color="white"
                        size={25} />

                </TouchableNativeFeedback>
                <Text style={styles.logo}>NETFLIX</Text>
                <Icon 
                    name="search"
                    color="white"
                    size={25} />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    logo: {
        width: 120,
        height: 40,
        color: 'red',
        fontSize: 30,
    }
})

//make this component available to the app
export default Header;
