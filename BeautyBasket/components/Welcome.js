import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'

import Home from './Home'
console.disableYellowBox = true

export default class Welcome extends React.Component {

    constructor() {
        super()
        this.state = {
            welcomePageLoaded: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomePageLoaded: false
            })
        }, 2000)
    }

    render() {

        const text = 'Beauty Basket'
        const loaded = this.state.welcomePageLoaded

        if (!loaded) {
            return <Home key={this.state}/>
        }

        return (
            <ImageBackground 
                style={styles.backgroundImage}
                source={require('../assets/default-image.jpg')}>
            </ImageBackground> 
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },

    backgroundImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%', 
        justifyContent: 'center',
    }
})
