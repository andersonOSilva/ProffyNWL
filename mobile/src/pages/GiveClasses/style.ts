import React from 'react'
import {StyleSheet} from 'react-native'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#8357e5',
        justifyContent:"center",
        padding:40,
    },
    content:{
        flex:1,
        justifyContent:"center",
        
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize:32,
        lineHeight:37,
        maxWidth:180
    },
    description:{
        marginTop:24,
        color:'#FFF',
        fontSize:16,
        lineHeight:26,
        fontFamily:'Poppins_400Regular',
        maxWidth:240
    },
    okButton:{
        marginVertical:40,
        backgroundColor:'#04d361',
        height:58,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8

    },
    okButtonText:{
        color:'#FFF',
        fontSize:16,
        fontFamily:'Archivo_700Bold'

    }




});

export default style