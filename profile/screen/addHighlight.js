import React, { Component } from 'react';
import { Container, Content, Text, Button,Item,Input, Form } from 'native-base';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';


export default class HighlightAdd extends Component{
    constructor(){
        super();
        this.state = {
            highlight:""
        }
    }

    handleSubmit(){
        highlight = this.state.highlight; 
        axios.post('http://localhost:8000/api/highlight/',highlight).then(
            (result)=>{        
            alert('data has been save.!');
          });
    }

    render(){
        return(
            <Container>
            <Content>
              <Form>
                <Item>
                  <Input placeholder="Highlight" onChangeText={(highlight)=>this.setState({highlight})} />
                </Item>
                <Button onPress={()=> this.handleSubmit()}><Text>Save</Text></Button>
              </Form>
            </Content>
          </Container>
        )
    }
}