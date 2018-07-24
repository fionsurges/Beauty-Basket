import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Card, CardItem, Footer, FooterTab, Button, Icon , Thumbnail} from 'native-base';
import AddItemForm from './AddItemForm'


export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            basket: [],
            loadBasket: false,
            showItemForm: false
        }
    }

    componentDidMount() {
        console.log('hello')
        this.getBasket()
    }
    
    getBasket = () => {
        fetch('https://beautybasket.herokuapp.com/basket')
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
    
    render() {
        
        const basket = this.state.basket
        const basketLoaded = this.state.loadBasket
        const showItemForm = this.state.showItemForm

        console.log(basket)
        
        return (
            <ScrollView style={{flex: 1, width:'100%'}}>
                <Container style={{flex: 1, width:'100%'}}>
                    <Header>
                    <Body>
                        <Title style={{width: '100%'}}>Your Beauty Basket</Title>
                    </Body>
                    </Header>
                    {basket.map(cosmetic => {
                        return (
                            <Container style={{flex: 1, flexDirection: 'row'}}>
                                <Content>
                                    <Card>
                                        <CardItem>
                                        <Left>
                                            <Body>
                                            <Text>{cosmetic.name}</Text>
                                            <Text note>{cosmetic.type}</Text>
                                            <Text note>{cosmetic.brand}</Text>
                                            </Body>
                                        </Left>
                                        </CardItem>
                                        <CardItem cardBody>
                                        <Image source={{uri: `${cosmetic.imageURL}`}} style={{height: 200, width: null, flex: 1,}}/>
                                        </CardItem>
                                        <CardItem>
                                        <Left>
                                            <Button transparent>
                                            <Icon active name="expand" />
                                            <Text>Details</Text>
                                            </Button>
                                        </Left>
                                        <Right>
                                            <Text>{cosmetic.date_added}</Text>
                                        </Right>
                                        </CardItem>
                                    </Card>
                                </Content>
                            </Container>
                            )
                        })}
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
                                {showItemForm ? <AddItemForm />: (null)}
                                <View style={styles.modalView}>
                                    <TouchableOpacity 
                                        onPress={() => {
                                            this.setState({
                                                showItemForm: false
                                                }
                                            )}
                                        }>
                                        <Text style={styles.closeModal}>Add Item!</Text>
                                    </TouchableOpacity>
                                </View>  
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
        </ScrollView>
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
    }
})