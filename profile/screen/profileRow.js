import React, { Component } from 'react';
import { Container, Content, Text, Button, Card, CardItem, Body, View, List, ListItem } from 'native-base';
import axios from 'axios';


export default class ProfileRow extends Component {
    constructor() {
        super();
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <Container>
                <Content>
                    <Card style={{height:100, padding:15}}>
                        <Text>{params.item.highlight}</Text>
                    </Card>
                </Content>
            </Container>
        )
    }
}
