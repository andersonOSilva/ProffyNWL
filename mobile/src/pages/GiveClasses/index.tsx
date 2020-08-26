import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import bgImage from '../../assets/images/give-classes-background.png'
import style from './style'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
function GiveClasses( ){
    
    const {goBack}=useNavigation()

    function handleNavigateBack() {
        goBack()
        
    }

    return (
        <View style={style.container}>
            <ImageBackground resizeMode='contain' source={bgImage} style={style.content}>
                <Text style={style.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={style.description}>
                    Para começar vc pecisa se cadastrar como Proffy na nossa plataforma web

                </Text>
            </ImageBackground>
            <RectButton onPress={handleNavigateBack} style={style.okButton}>
                <Text style={style.okButtonText}>
                    Tudo bem
                </Text>

            </RectButton>
        </View>
        )

}
export default GiveClasses