//import liraries
import React, { Component } from 'react';
import { Navigator } from 'react-native';

import App from './App';
import Search from './components/Search';
// create a component
class indexApp extends Component {

    renderScene = (route, navigator) => {
        var navigator = { navigator }

        switch (route.ident) {
            case 'App':
                return <App />
            case 'Search':
                return <Search />
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ident: 'Search'}}
                renderScene={this.renderScene}>
            </Navigator>
        );
    }
}


//make this component available to the app
export default indexApp;
