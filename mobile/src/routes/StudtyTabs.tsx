import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
import { Archivo_400Regular } from '@expo-google-fonts/archivo';
import {Ionicons} from '@expo/vector-icons' 

const {Navigator, Screen} = createBottomTabNavigator();
// função de navegação dentro da navegação
function StudyTabs(){
    return (
        <Navigator
            tabBarOptions={{
                style:{
                    elevation:0,
                    shadowOpacity:0,
                    height:64
                },
                tabStyle:{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'

                },
                iconStyle:{
                    flex:0,
                    width:20,
                    height:0
                },
                labelStyle:{
                    fontFamily:'Archivo_400Regular',
                    fontSize:13,
                    marginLeft:16
                },
                inactiveBackgroundColor:'#fafafc',
                activeBackgroundColor:'#ebebf5',
                inactiveTintColor:'#c1bccc',
                activeTintColor:'#32264d',
            }}>
            <Screen
            name='TeacherList'
            component={TeacherList}
            options={{
                tabBarLabel:'Proffys',
                tabBarIcon:({color,size, focused}) => {
                    return(
                        <Ionicons name="ios-easel" color={focused ? '#8257e5':color} size={size} />
                    )
                }
            }}
            />
            <Screen
            name='Favorites'
            component={Favorites}
            options={{
                tabBarLabel:'Favoritos',
                tabBarIcon:({color,size,focused}) => {
                    return(
                        <Ionicons name="ios-heart" color={focused ? '#8257e5':color} size={size}/>
                    )
                }
            }} />
        </Navigator>
    )
    
}
export default StudyTabs