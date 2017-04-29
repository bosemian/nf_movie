//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')
const imageSlider = [
    { image: require('../../images/1.jpg') },
    { image: require('../../images/2.jpg') },
    { image: require('../../images/3.jpg') }
]
// create a component
class Slider extends Component {
    render() {
        return (
            <View>
                <Swiper 
                    autoplay
                    height={240}>
                    {imageSlider.map((item, i) => {
                        return (
                            <View style={styles.container} key={i}>
                                <Image style={styles.image} source={item.image} />    
                            </View>
                        )
                    })}
                </Swiper>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    }
});

//make this component available to the app
export default Slider;
