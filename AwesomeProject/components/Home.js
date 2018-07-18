import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'


export default class Home extends React.Component {
    render() {
        return (
        <View>
            <Text>Hello there</Text>
            <Button title="Login" onPress={() => Actions.login()}>Login</Button>
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
