import React from 'react'
import { View } from 'react-native'
import style from './style'
import PageHeader from '../../../components/PageHeader'

function Favorites() {
    return (
        <View style={style.container}>
            <PageHeader title="Meus Proffys favoritos"/>
        </View>
    )
    
}

export default Favorites