import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Body, Title } from 'native-base';


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
                        <Item>
                        <Input 
                            onChangeText={(text) => this.setState({expiration: text})}
                            placeholder="Expiration Date (MM/DD/YYYY)" />
                        </Item>
                        <Item last>
                        <Input 
                            onChangeText={(text) => {
                                console.log(this.state)
                                this.setState({imageURL: text})}}
                            name='imageURL'
                            value={this.state.imageURL}
                            placeholder="ImageURL" />
                        </Item>
                    </Form>
                    </Content>
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
    }
})
