import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Modal, TouchableOpacity, Image, Alert, ImageBackground } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Card, CardItem, Footer, FooterTab, Button, Icon , Thumbnail} from 'native-base';

import AddItemForm from './AddItemForm'
import moment from 'moment'

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            basket: [],
            loadBasket: false,
            showItemForm: false,
            itemForm: {
                id: 0,
                name: '',
                brand: '',
                type: '',
                expiration_date: '',
                imageURL: ''
            }
        }
    }

    componentDidMount() {
        this.getBasket()
    }
    
    getBasket = () => {
        return fetch('https://beautybasket.herokuapp.com/basket')
            .then(response => response.json())
            .then(basket => {
                this.setState({
                    basket: basket.basket,
                    loadBasket: true
                })
            }).catch(err => console.error(err))
    }

    addItemModal = () => {
        this.setState({
            showItemForm: true
        })
    }

    addToBasket = (newItem) => {
        fetch('https://beautybasket.herokuapp.com/basket', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: ({
                'content-type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(this.getBasket)
        this.setState({
            showItemForm: false
            })
    }
    
    deleteItem = (id) => {
        Alert.alert('Item deleted!')

        fetch(`https://beautybasket.herokuapp.com/basket/${id}`, {
                    method: 'Delete',
            })

        .then(response => response.text)
        .then(response => console.log(response))
        .then(this.getBasket)
    }
    
    render() {
        
        const basket = this.state.basket
        const showItemForm = this.state.showItemForm

        return (
            <Container style={{flex: 1, width:'100%'}}>
                    <Header>
                    <Body>
                        <Title style={{width: '100%'}}>Your Beauty Basket</Title>
                    </Body>
                    </Header>
                <ScrollView style={{width: '100%'}}>
                    {basket.map(cosmetic => {
                        const image = cosmetic.image
                        return (
                            <View>
                            { image ?
                                <ImageBackground style={{width:'100%', height:220}} source={{uri: cosmetic.image}}>
                                    <Text style={styles.cosmeticText}>{cosmetic.name}</Text>
                                    <Text style={styles.cosmeticText}>{cosmetic.brand}</Text>
                                    <Text style={styles.cosmeticText}>{cosmetic.type}</Text>
                                    <Text style={styles.cosmeticText}>{moment(cosmetic.date_added).format('MMM Do YY')}</Text>
                                    <Text style={styles.cosmeticText}>{cosmetic.expiration_date}</Text>
                                    <Button onPress={() => this.deleteItem(cosmetic.id)}>
                                        <Text>Delete</Text>
                                    </Button>
                                </ImageBackground> : <ImageBackground style={{width:'100%', height:220}} source={require('../assets/background.jpg')}>
                                                        <Text style={styles.cosmeticText}>{cosmetic.name}</Text>
                                                        <Text style={styles.cosmeticText}>{cosmetic.brand}</Text>
                                                        <Text style={styles.cosmeticText}>{cosmetic.type}</Text>
                                                        <Text style={styles.cosmeticText}>{moment(cosmetic.date_added).format('MMM Do YY')}</Text>
                                                        <Text style={styles.cosmeticText}>{cosmetic.expiration_date}</Text>
                                                        <Button onPress={() => this.deleteItem(cosmetic.id)}>
                                                            <Text >Delete</Text>
                                                        </Button>
                                                    </ImageBackground> }
                            )
                        </View>
                        )})}
                </ScrollView>
                <Footer>
                    <FooterTab>
                        <Button active>
                        <Icon name="md-basket" />
                        <Text>My Basket</Text>
                        </Button>
                        <Button >
                        <Icon name="camera" />
                        <Text>Camera</Text>
                        </Button>
                        <Button>
                            <Modal 
                                visible={this.state.showItemForm}
                                onRequestClose={() => console.warn('this is a close request')}>
                                {showItemForm ? <AddItemForm addToBasket={this.addToBasket}/>: (null)}
                            </Modal>
                            <TouchableOpacity
                                onPress={this.addItemModal}>
                                <Icon name="add" />
                                <Text>Add Item</Text>
                            </TouchableOpacity>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const {width, height} = Dimensions.get('window') 

const styles = StyleSheet.create ({
    modalView: {
        backgroundColor: '#aaa', 
        height: 150, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    closeModal: {
        backgroundColor: '#333',
        color: 'white',
        padding: 5,
        margin: 20
    },
    cosmeticText: {
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: '#252525',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 15
    }
})