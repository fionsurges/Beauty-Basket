import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Card, CardItem, Footer, FooterTab, Button, Icon , Thumbnail} from 'native-base';


export default class AddItemForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            brand: '',
            type: '',
            expiration: '',
            imageURL: ''
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <TextInput 
                onChangeText={text => 
                    this.setState({
                        name: text
                })}
                value={this.state.name}
                >
            </TextInput>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
