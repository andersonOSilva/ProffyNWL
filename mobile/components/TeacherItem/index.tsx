import React from 'react'
import { View, Image, Text } from 'react-native'
import style from './style'

function TeacherItem() {
    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image style={style.avatar}
                       source={{uri: 'https://avatars1.githubusercontent.com/u/38002829?s=460&u=12cea36c425ed18c2337fbcdcf4028f4ec81cb36&v=4'}}>

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