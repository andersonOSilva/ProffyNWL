import React, { useState, useEffect } from 'react'
import { View, Image, Text, TouchableOpacity} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import style from './style'
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png' 
import {useNavigation} from '@react-navigation/native'
import api from '../../services/api'

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    useEffect(()=>{
        api.get('connections').then((response=>{
            
            const {total} = response.data

            setTotalConnections(total)
        }))
    },[])
    const {navigate} = useNavigation();

    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses')
    }
    function handleNavigateToStudyPages() {
        navigate('Study')
        
    }
    return (
        <View style={style.container}>
            <Image source={landingImg} style={style.banner} />

            <Text style={style.title} >
                Seja Bem-vindo,{"\n"}
                <Text style={style.titleBold}>
                    O que deseja fazer?
                </Text >
            </Text>
            <View style={style.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudyPages} style={[style.button,style.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={style.buttonText}>
                        Estudar
                    </Text>

                </RectButton>
                <RectButton
                   onPress={handleNavigateToGiveClassesPage} 
                   style={[style.button,style.buttonSecondary]}>
                    <Image source={giveClassesIcon}/>
                    <Text style={style.buttonText}>
                        Dar aulas
                    </Text>

                </RectButton>
            </View>
            <Text style={style.totalConnections}>
                Total de {totalConnections} conexoes realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
        )
        
}

export default Landing