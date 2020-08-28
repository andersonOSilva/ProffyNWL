import React from 'react'
import { View, Image, Text } from 'react-native'
import style from './style'

function TeacherItem() {
    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image style={style.avatar}
                       source={{uri: 'https://www.facebook.com/photo/?fbid=1462776893869931&set=a.107307022750265&__tn__=%3C'}}>

                </Image>
                <View style={style.profileInfo}>
                    <Text style={style.name}>
                        Anderson Silva
                    </Text>
                    <Text style={style.subject}>
                        ed fisica
                    </Text>

                </View>
                
            </View>


        </View>
    )
}

export default TeacherItem