import React from 'react'
import { View } from 'react-native'
import style from './style'
import PageHeader from '../../../components/PageHeader'
import TeacherItem from '../../../components/TeacherItem'

function TeacherList() {
    return (
        <View style={style.container}>
            <PageHeader title="Proffys disponiveis"/>
            <TeacherItem/>
        </View>
    )
    
}

export default TeacherList