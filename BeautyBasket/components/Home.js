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
    
    closeModal = () => {
        this.setState({
            showItemForm: false
        })
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
                                    <View style={styles.textBox}>
                                        <View style={{margin: 10}}>
                                            <Text style={styles.cosmeticName}>{cosmetic.name}</Text>
                                            <Text style={styles.cosmeticBrand}>{cosmetic.brand}</Text>
                                            <Text style={styles.cosmeticType}>{cosmetic.type}</Text>
                                            <Text style={styles.addedText}>Date added: {moment(cosmetic.date_added).subtract(10, 'days').calendar()}</Text>
                                            <Text style={styles.expiringText}>Expires: {cosmetic.expiration_date}</Text>
                                        </View>
                                    <Button style={styles.deleteButton} onPress={() => this.deleteItem(cosmetic.id)}>
                                        <Text style={{marginLeft: 30}}>Delete</Text>
                                    </Button>
                                    </View>
                                </ImageBackground> : <ImageBackground style={{width:'100%', height:220}} source={require('../assets/background.jpg')}>
                                                        <View style={styles.textBox}>
                                                            <View style={{margin: 10}}>
                                                                <Text style={styles.cosmeticName}>{cosmetic.name}</Text>
                                                                <Text style={styles.cosmeticBrand}>{cosmetic.brand}</Text>
                                                                <Text style={styles.cosmeticType}>{cosmetic.type}</Text>
                                                                <Text style={styles.addedText}>Date added: {moment(cosmetic.date_added).subtract(10, 'days').calendar()}</Text>
                                                                <Text style={styles.expiringText}>Expires: {cosmetic.expiration_date}</Text>
                                                            </View>
                                                        <Button style={styles.deleteButton} transparent onPress={() => this.deleteItem(cosmetic.id)}>
                                                            <Text style={{marginLeft: 30}}>Delete</Text>
                                                        </Button>
                                                        </View>
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
                                {showItemForm ? <AddItemForm addToBasket={this.addToBasket} closeModal={this.closeModal}/>: (null)}
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
        margin: 15 
    },
    textBox: {
        width: '53%',
        backgroundColor: 'rgba(242, 241, 243, 0.44)',
        borderRadius: 5,
        marginTop: 10,
        margin: 8,
    },
    cosmeticName: {
        opacity: 1,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#544661',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 15
    },
    cosmeticBrand: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 15,
        color: '#544661',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 15
    },
    cosmeticType: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#544661',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 15
    },
    addedText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#544661',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 15
    },
    expiringText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#544661',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 10
    },
    deleteButton: {
        backgroundColor: 'rgba(204, 193, 214, 0.71)',
        marginTop: 30,
        marginBottom: 20,
        margin: 10,
        width: 100,
        height: 30,
    }
    
})