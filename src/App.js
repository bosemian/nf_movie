//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SideMenu from 'react-native-side-menu'

import ListMovie from './components/ListMovie';
import Slider from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';
// create a component
class App extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    updateMenu(isOpen) {
        this.setState({ isOpen })
    }

    render() {
        return (
            <View style={styles.container}>
                <SideMenu 
                    menu={Menu}
                    isOpen={this.state.isOpen}
                    onChange={isOpen => this.updateMenu(isOpen)} >
                        <Header toggle={this.toggle} />
                        <Slider />
                        <ListMovie />
                </SideMenu>
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
