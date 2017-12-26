import React from 'react';
import {Text,View,Button,Image,AppRegistry} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
import {FooterBottom} from './../components/FooterBottom.js';
export default class searchscreen extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor}) => (
    <Icon name='search' style={{color:tintColor}} />
       ),   
       headerStyle:{backgroundColor:'#FFF'},
       headerTitleStyle:{color:'blue'},
   }
 render() {
     return(
        <Container>
        <View>
            </View>
       
          
          </Container>  
     );
 }
}