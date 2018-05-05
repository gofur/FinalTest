import React, { Component } from 'react';
import { Container, Content, Text, Button, Card, CardItem, Body, View, List, ListItem, Fab, Icon } from 'native-base';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

export default class ProfileList extends Component {
    constructor() {
        super();
        this.state = {
            profile: [],
            highlight: []
        }
    }

    componentWillMount() {
        this.getDataProfile();
        this.getDataHighlight();
    }

    getDataProfile = () => {
        axios.get('http://localhost:8000/api/profile/1/').then((result) => {

            this.setState({
                profile: result.data
            })
        })
    }

    getDataHighlight = () => {
        axios.get('http://localhost:8000/api/highlight/').then((result) => {

            this.setState({
                highlight: result.data.results
            })
        })
    }

    render() {

        const profile_name = this.state.profile.profile_name;
        const position = this.state.profile.position;

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem >
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <Image source={require("../images/gofur.png")} style={{ width: 100, height: 100 }}>
                                </Image>
                                <Body>
                                    <List style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>{profile_name}</Text>
                                        <Text note>{position}</Text>
                                    </List>
                                    <View style={{ flexDirection: "row", paddingTop: 30, marginLeft: 10, flex: 1, justifyContent: 'space-between' }}>
                                        <Button bordered><Text>Message</Text></Button>
                                        <Button>
                                            <Text>Connect</Text>
                                        </Button>
                                    </View>
                                </Body>
                            </View>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header bordered>
                            <Text>Highlights</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <List>
                                    {
                                        this.state.highlight.map((item, index) => {
                                            return (
                                                <ListItem key={index} onPress={() => this.props.navigation.navigate("ProfileRow", { item: item })}>
                                                    <Text >{item.highlight}</Text>
                                                </ListItem>
                                            )
                                        })}
                                </List>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>

                <Fab 
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate("AddHighlight")}>
                        <Icon name="add" />
                    </Fab>
            </Container>
        )
    }

}