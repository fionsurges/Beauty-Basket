import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'

import Home from './Home'

export default class Welcome extends React.Component {

    constructor() {
        super()
        this.state = {
            welcomePageLoaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomePageLoaded: false
            })
        }, 4000)
    }

    render() {

        const text = 'Beauty Basket'
        const loaded = this.state.welcomePageLoaded

        if (!loaded) {
            return <Home />
        }

        return (
            <ImageBackground 
                style={styles.backgroundImage}
                source={require('../assets/background.jpg')}>
                <View style={styles.textBorder}>
                    <Text style={styles.backgroundText}>{text}</Text>
                </View>
            </ImageBackground> 
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },

    backgroundImageContainer: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
    },

    backgroundImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%', 
        justifyContent: 'center',
    },

    textBorder: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(234, 234, 234, 0.94)',
        width: 275,
        left: 50,
    },

    backgroundText : {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 30,
        padding: 40,
    }
})
