import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#e6e6f0',
        borderRadius:8,
        marginBottom:16,
        overflow:'hidden'
        
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        padding:24
    },
    avatar:{
        width:64,
        height:64,
        borderRadius:32,
        backgroundColor:'#eee'
    },

    profileInfo:{
        marginLeft:16
    },
    name:{
        fontFamily:'Archivo_400Regular',
        color:'#32264d',
        fontSize:20

    },
    subject:{
        fontFamily:'Poppins_400Regular',
        color:'#6a6180',
        fontSize:12,
        marginTop:4
        
    },

})

export default style