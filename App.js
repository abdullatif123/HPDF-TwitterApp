import React from 'react';
import {View,Text} from 'react-native';
import HomeScreenNavigator from './tabs/index.js';
import {Container,Content} from 'native-base';
import {FooterBottom} from './components/FooterBottom';

export default class App extends React.Component {
  render(){
    return(
      <Container>
     
      <HomeScreenNavigator/>
    
    
      <FooterBottom/>

        </Container>
    );
  }
}
