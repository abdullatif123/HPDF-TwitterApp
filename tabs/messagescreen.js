import React from 'react';
import {Text,View,Button,Image} from 'react-native';
import {Icon,Container} from 'native-base';
import { FooterBottom } from '../components/FooterBottom';
export default class messagescreen extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor}) => (
    <Icon name='mail' style={{color:tintColor}} />
       ),   
   }
 render() {
     return(
         <Container>
         <View style={{flex:1}}>
             <Text>Messages</Text>
          </View>  
         
          </Container>
     );
 }
}
 