import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import style from './style'
import { RectButton } from 'react-native-gesture-handler'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface Teacher {
    
    id: number;
    cost: number;
    name: string;
    avatar: string;
    whatsapp: string;
    subject: string;
    bio: string;

}
interface TeacherItemProps {
    teacher:Teacher
    favorited:boolean
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher,favorited}) => {
    const [isFavorited,setIsFavorited] = useState(favorited)

    async function handleToogleFavorite() {
        const favorite = await AsyncStorage.getItem('favorites')
        
        let favoritesArray = []
        if (favorite){
            favoritesArray = JSON.parse(favorite)
        }

        
        if(isFavorited){
           const favoriteIndex = favoritesArray.findIndex((TeacherItem: Teacher)=>{
               return TeacherItem.id === teacher.id
           }) 

           favoritesArray.splice(favoriteIndex, 1)
           setIsFavorited(false)
           
           // console.log('amigo donde esta');
            await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray))
        } else {
            favoritesArray.push(teacher)
            setIsFavorited(true)
            await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray))
            // console.log('amigo estou aqui');
        }   
    }

    function handleLinkToWhatsapp() {
        api.post('connections',{
            user_id:teacher.id
        })
        console.log('-amigo estou aqui');
        
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)

        
    }
    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image style={style.avatar}
                       source={{uri: teacher.avatar}}>

                </Image>
                <View style={style.profileInfo}>
                    <Text style={style.name}>
                        {teacher.name}
                    </Text>
                    <Text style={style.subject}>
                        {teacher.subject}
                    </Text>

                </View>
                
            </View>
            <Text style={style.bio}>
                {teacher.bio}
            </Text>
            <View style={style.footer}>
                <Text style={style.price}>
                    Preço/Hora {'   '}

                </Text>
                <Text style={style.priceValue}>
                    R$ {teacher.cost}

                </Text>
                <View style={style.buttonsContainer}>
                    {/* <RectButton  style={[ style.favoriteButton,style.favorited]}> */}
                    <RectButton onPress={handleToogleFavorite} style={[ style.favoriteButton, isFavorited? style.favorited : {} ]}>
                        
                        { isFavorited ? <Image source={unfavoriteIcon}/> : <Image source={heartOutlineIcon}/>  }
                        
                    </RectButton>
                    <RectButton onPress={handleLinkToWhatsapp} style={style.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={style.contactButtonText}>Entrat em contato</Text>
                    </RectButton>

                </View>

            </View>
        </View>
    )
}

export default TeacherItem