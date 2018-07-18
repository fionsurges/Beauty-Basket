import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Card, CardItem, Footer, FooterTab, Button, Icon , Thumbnail} from 'native-base';



export default class Home extends Component {

    componentDidMount() {
        console.log('Hola')
        
    }
    
    render() {
        return (
            <View style={{flex: 1, width:'100%'}}>
            <Container style={{flex: 1, width:'100%'}}>
                <Header>
                <Body>
                    <Title style={{width: '100%'}}>Beauty Basket</Title>
                </Body>
                </Header>
                <Title style={{width: '100%', textAlign: 'left'}}>Basket Items:</Title>
                <Container style={{flex: 1, flexDirection: 'row'}}>
                    <Content>
                        <Card style={styles.card}>
                            <CardItem>
                            <Left>
                                <Body>
                                <Text>KIELS Ultra Facial Cream SPF 30</Text>
                                <Text note>Moisturizer</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem cardBody>
                            <Image source={require('../assets/Kiehls-Ultra-Facial-Cream-SPF-30.png')} style={{height: 200, width: null, flex: 1,}}/>
                            </CardItem>
                            <CardItem>
                            <Left>
                                <Button transparent>
                                <Icon active name="expand" />
                                <Text>Details</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Text>Added: 7/15/2018</Text>
                            </Right>
                            </CardItem>
                        </Card>
                    </Content>
                    <Content>
                        <Card style={styles.card}>
                            <CardItem>
                            <Left>
                                <Body>
                                <Text>KIELS Ultra Facial Cream SPF 30</Text>
                                <Text note>Moisturizer</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem cardBody>
                            <Image source={require('../assets/Kiehls-Ultra-Facial-Cream-SPF-30.png')} style={{height: 200, width: null, flex: 1,}}/>
                            </CardItem>
                            <CardItem>
                            <Left>
                                <Button transparent>
                                <Icon active name="expand" />
                                <Text>Details</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Text>Added: 7/15/2018</Text>
                            </Right>
                            </CardItem>
                        </Card>
                    </Content>
                    <Content>
                        <Card style={styles.card}>
                            <CardItem>
                            <Left>
                                <Body>
                                <Text>KIELS Ultra Facial Cream SPF 30</Text>
                                <Text note>Moisturizer</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem cardBody>
                            <Image source={require('../assets/Kiehls-Ultra-Facial-Cream-SPF-30.png')} style={{height: 200, width: null, flex: 1,}}/>
                            </CardItem>
                            <CardItem>
                            <Left>
                                <Button transparent>
                                <Icon active name="expand" />
                                <Text>Details</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Text>Added: 7/15/2018</Text>
                            </Right>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
                <Footer>
                    <FooterTab>
                        <Button vertical active>
                        <Icon name="md-basket" />
                        <Text>My Basket</Text>
                        </Button>
                        <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                        </Button>
                        <Button vertical>
                        <Icon name="person" />
                        <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                    </Footer>
            </Container>
        </View>
        )
    }
}

const {width, height} = Dimensions.get('window') 

const styles = StyleSheet.create ({
    card: {
        width: 500,
    }
})