import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'


export default class Login extends React.Component {

    onPress() {
        Actions.pop();
        Actions.loggedIn();
    }

    render() {
        return ( 
        <View>
            <Text>Hello there</Text>
            <Button title="Home" onPress={this.onPress}>Home</Button>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
