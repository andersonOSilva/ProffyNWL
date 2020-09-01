import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import backIcon from '../../assets/images/icons/back.png'
import logoImage from '../../assets/images/logo.png'

import style from './style'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps{
    title:string;
    headerRight?:ReactNode;
}
const PageHeader: React.FC<PageHeaderProps>= ({title, children, headerRight}) => {
    const {navigate} = useNavigation();
    function handleGoBack() {
        navigate('Landing')
        
        
    }
    return (
        <View style={style.container}>
            <View style={style.topBar} >
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode='contain' />
                </BorderlessButton>

                <Image source={logoImage} resizeMode='contain'/>
            </View>
            <View style={style.header}>
                <Text style={style.title}> {title} </Text>
                {headerRight}

            </View>
            
            {children}
        </View>
        )
    
}
export default PageHeader