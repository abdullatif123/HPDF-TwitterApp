import React from 'react';
import {Text,View,Button,Image} from 'react-native';
import {Icon,Container} from 'native-base';
import {FooterBottom} from './../components/FooterBottom.js'
export default class notificationscreen extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor}) => (
    <Icon ios='ios-notifications' android='md-notifications' style={{color:tintColor}} />
       ),   
   }
 render() {
     return(
         <Container>
         <View style={{flex:1}}>
             <Text>Notifications</Text>
          </View>   
           
           </Container>  
     );
 }
}
 
