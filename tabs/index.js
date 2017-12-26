import React  from "react";
import { View,Text,Icon,ScrollView } from "react-native";
import {TabNavigator,DrawerNavigator,StackNavigator} from 'react-navigation';
import homescreen from './homescreen';
import {FooterBottom} from './../components/FooterBottom.js';
import searchscreen from './searchscreen';
import notificationscreen from './notificationscreen';
import messagescreen from './messagescreen';
import Lists from './../SideBar/Lists.js';
import Moments from './../SideBar/Moments.js';
import Profile from './../SideBar/Profile.js';
import Highlights from './../SideBar/Highlights.js';
import TabBarComponent from './TabBarComponent';

const MainScreenNavigator = TabNavigator({
  Home:{screen:homescreen},
  Search:{screen:searchscreen},
  Notifications:{screen:notificationscreen},
  Messages:{screen:messagescreen}
},{
  tabBarComponent: props => (<TabBarComponent{...props} />), 
    tabBarPosition: 'top',
		animationEnabled: true,
  tabBarOptions: {
    pressColor:'white',
    activeTintColor:'blue',
    inactiveTintColor:"grey",
    showIcon:true,
    showLabel:false,
    style:{
      backgroundColor:'white',
    },
    indicatorStyle:{
      backgroundColor:'blue',
    },
  },
},

);


const HomeScreenNavigator = DrawerNavigator(
  {
    Home: { screen: MainScreenNavigator },
    Profile: { screen: Profile},
    Lists: { screen: Lists },
    Moments: { screen: Moments },
    Highlights: { screen: Highlights },
  },
  {
    drawerPosition:'left',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
  },
 
);

export default HomeScreenNavigator;

