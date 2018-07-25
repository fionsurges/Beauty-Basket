import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Body, Title } from 'native-base';


export default class AddItemForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            brand: '',
            type: '',
            expiration_date: '',
            image: ''
        }
    }

    handleNewItemForm = () => {
        const newItem = {
            name: this.state.name,
            brand: this.state.brand,
            type: this.state.type,
            expiration_date: this.state.expiration_date,
            imageURL: this.state.imageURL
        }
        this.props.addToBasket(newItem)
        console.log(newItem)
    }


    render() {
        return (
            <Container style={styles.container}>
                <Header style={{width:'100%'}}>
                    <Body>
                        <Title style={{width: '100%'}}>Add an Item</Title>
                    </Body>
                </Header>
                <Container style={{width:'100%'}}>
                    <Content>
                    <Form>
                        <Item>
                        <Input 
                            onChangeText={(text) => this.setState({name: text})}
                            placeholder="Item Name" />
                        </Item>
                        <Item>
                        <Input 
                            onChangeText={(text) => this.setState({brand: text})}
                            placeholder="Brand" />
                        </Item>
                        <Item>
                        <Input 
                            onChangeText={(text) => this.setState({type: text})}
                            placeholder="Type" />
                        </Item>
                        <Item last>
                        <Input 
                            onChangeText={(text) => {this.setState({expiration_date: text})}}
                            placeholder="Expiration Date" />
                        </Item>
                    </Form>
                    </Content>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={this.handleNewItemForm} style={styles.button}>
                            <Text style={styles.buttonText}>Add Item!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.closeModal} style={styles.button}>
                            <Text style={styles.closeText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Container>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        flexDirection: 'row',
        height: 150, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'rgba(204, 193, 214, 0.71)',
        marginTop: 30,
        marginBottom: 20,
        margin: 10,
        width: 100,
        height: 50,
        borderRadius: 5
    },
    buttonText : {
        marginTop: 15,
        marginLeft: 16, 
        fontWeight:'bold', 
        color: '#544661'
    },
    closeText : {
        marginTop: 15,
        marginLeft: 25, 
        fontWeight:'bold', 
        color: '#544661'
    }
})
