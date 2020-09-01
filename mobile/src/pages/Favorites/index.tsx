import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import style from './style'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
import {Teacher} from '../../components/TeacherItem'
import { useFocusEffect } from '@react-navigation/native'


function Favorites() {
    const [favorites,setFavorites] = useState([])
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then((response) =>{
            if (response){
                const favoritedTeachers = JSON.parse(response);
                
                console.log(favoritedTeachers);
                setFavorites(favoritedTeachers)
            }
        })
    }
    useFocusEffect(()=>{
        loadFavorites();        
    })
    return (
        <View style={style.container}>
            <PageHeader title="Meus Proffys favoritos"/>
            <ScrollView style={style.teacherList} contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16
            }}> 
                {favorites.map((teacher:Teacher)=>{
                    return(
                        <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                        />
                )
                    

                })}
            </ScrollView>
        </View>
    )
    
}

export default Favorites