import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import {Feather} from  '@expo/vector-icons'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList() {
    const [favorites,setFavorites] = useState<number[]>([])
    const [isFiltersVisible,setIsFiltersVisible] = useState(false);
    const [subject,setSubject]= useState('')
    const [week_day,setWeek_day]= useState('')
    const [time,setTime]= useState('')
    const [teachers,setTeachers]= useState([])

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then((response) =>{
            if (response){
                const favoritedTeachers = JSON.parse(response);
                
                const favoritedTeachersIds = favoritedTeachers.map((Teacher:Teacher) =>{
                    return Teacher.id
                });
                console.log(favoritedTeachersIds);
                
                setFavorites(favoritedTeachersIds)
            }
        })
    }
    useFocusEffect(()=>{
        loadFavorites();        
    })
    function handleToggleFiltersVisible(){
        
        setIsFiltersVisible(!isFiltersVisible) 
    }
    async function handleFiltersSubmit(){
        loadFavorites()
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        });
        setTeachers(response.data);
        
        
    }
    return (
        <View style={style.container}>
            <PageHeader 
                title="Proffys disponiveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color='#FFF' />
                    </BorderlessButton>
                )}>
                {isFiltersVisible && 

                    <View style={style.searchForm}>
                        <Text style={style.label}>
                            Materia
                        </Text>
                        <TextInput
                            style={style.input}
                            placeholder="Qual materia?"
                            placeholderTextColor='#c1bccc'
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            />

                        <View style={style.inputGroup}>
                            <View style={style.inputBlock}>
                            <Text style={style.label}>
                                Qual dia da semana
                            </Text>
                            <TextInput
                                style={style.input}
                                placeholder="Qual dia?"
                                placeholderTextColor='#c1bccc'
                                value={week_day}
                                onChangeText={text => setWeek_day(text)}
                                />

                            </View>

                        
                            <View style={style.inputBlock}>
                                <Text style={style.label}>
                                    Qual Horario
                                </Text>
                                <TextInput
                                    style={style.input}
                                    placeholder="Qual horario?"
                                    placeholderTextColor='#c1bccc'
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    />

                            </View>
                        
                        </View>
                        <RectButton onPress={handleFiltersSubmit} style={style.submitButton}>
                            <Text style={style.submitButtonText}> Buscar </Text>
                        </RectButton>

                    </View>
                }
            </PageHeader>
            <ScrollView style={style.teacherList} contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16
            }}> 
                {teachers.map((teacher:Teacher) => { 
                    return  <TeacherItem key={teacher.id}  teacher={teacher} favorited={favorites.includes(teacher.id)}/>
                    })}
                
                
            </ScrollView>
        </View>
    )
    
}

export default TeacherList