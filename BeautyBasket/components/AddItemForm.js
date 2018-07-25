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
            expiration_date: this.state.expiration,
            imageURL: this.state.imageURL
        }
        this.props.addToBasket(newItem)
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
                            onChangeText={(text) => this.setState({expiration_date: text})}
                            placeholder="Expiration Date" />
                        </Item>
                    </Form>
                    </Content>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={this.handleNewItemForm}>
                            <Text>Add Item!</Text>
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
        backgroundColor: '#aaa', 
        height: 150, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#333',
        color: 'white',
        padding: 5,
        margin: 20
    }
})
