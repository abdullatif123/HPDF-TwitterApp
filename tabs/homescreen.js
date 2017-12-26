import React from 'react';
import {ScrollView,Image,View} from 'react-native';
import {Card,CardItem,Form,Picker,Left,Right,Thumbnail,Body,  Button, Icon, Text} from 'native-base';
import MainScreenNavigator from './index.js';
export default class homescreen extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor}) => (
    <Icon name='home' style={{color:tintColor}} />
       ),   
   }
 render() {
     return(
        <ScrollView>
            <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('./../SideBar/Images/1.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>

                <View>
                  <Text style={{fontWeight:'bold'}}>Cristiano Ronaldo   </Text> 
                
                  <Text>We are ready..</Text>
                  </View>
                  <Text>Dec 26  </Text>
                <Icon name='arrow-dropdown' style={{color:'blue'}}/>
                
          </Body>
               
             </Left>    
             
           </CardItem>
        
           <CardItem cardBody>
                <Image source={require('./../SideBar/Images/2.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>

            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="text" />
                 <Text style={{paddingLeft:5,color:'black'}}>58</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="git-compare" />
                <Text style={{paddingLeft:5,color:'black'}}>3</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="heart" />
                 <Text style={{paddingLeft:5,color:'black'}}>45</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="mail" />
                 <Text style={{paddingLeft:5,color:'black'}}>10</Text>
                 </Button>


           </CardItem>
         </Card>
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('./../SideBar/Images/1.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>

                <View>
                  <Text style={{fontWeight:'bold'}}>Cristiano Ronaldo   </Text> 
                
                  <Text>We are ready..</Text>
                  </View>
                  <Text>Dec 26  </Text>
                <Icon name='arrow-dropdown' style={{color:'blue'}}/>
                
          </Body>
               
             </Left>    
             
           </CardItem>
        
           <CardItem cardBody>
                <Image source={require('./../SideBar/Images/2.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>

            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="text" />
                 <Text style={{paddingLeft:5,color:'black'}}>58</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="git-compare" />
                <Text style={{paddingLeft:5,color:'black'}}>3</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="heart" />
                 <Text style={{paddingLeft:5,color:'black'}}>45</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="mail" />
                 <Text style={{paddingLeft:5,color:'black'}}>10</Text>
                 </Button>


           </CardItem>
         </Card>
         
       
          
     </ScrollView>
    
     );
    }
  }