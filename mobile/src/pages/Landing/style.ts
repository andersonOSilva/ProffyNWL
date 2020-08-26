import React from 'react'
import {StyleSheet} from 'react-native'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular } from '@expo-google-fonts/archivo';

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#8357e5',
        justifyContent:"center",
        padding:40,

    },
    banner: {
        width:'100%',
        resizeMode: "contain",

    },
    title:{
        color:'#fff',
        fontSize:20,
        lineHeight:30,
        marginTop:80,
        fontFamily:'Poppins_400Regular'

    
    },
    titleBold:{
        fontFamily:'Poppins_600SemiBold'
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginTop:40,
        justifyContent:'space-between',
    },
    button:{
        height:150,
        width:'48%',
        backgroundColor:'#333',
        borderRadius:8,
        padding:24,
        justifyContent:'space-between'
    },
    buttonPrimary:{
        
        backgroundColor:'#9871F5',
        
    },
    buttonSecondary:{
        
        backgroundColor:'#04D361',
        
    },
    buttonText:{
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize:20,
    },
    totalConnections:{
        fontFamily:'Poppins_400Regular',
        color:'#d4c2ff',
        fontSize:12,
        lineHeight:20,
        maxWidth:140,
        marginTop:80



    }


});

export default style