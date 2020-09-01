import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f7'
    },
    teacherList:{
        marginTop:-40,
        padding:16

    },
    searchForm:{
        marginBottom:24,

    },
    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    label:{
        color:'#d4c2ff',
        fontFamily:'Poppins_400Regular'
    },
    input:{
        height:54,
        backgroundColor:'#fff',
        borderRadius:8,
        justifyContent:'center',
        paddingHorizontal:16,
        marginTop:4,
        marginBottom:16

    },
    inputBlock:{
        width:'48%'
    },
    submitButton:{
        
        backgroundColor:'#04d361',
        
        height:56,
        borderRadius: 8,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    submitButtonText:{
        color:'#fff',
        fontFamily:'Archivo_700Bold',
        fontSize:16,
        marginLeft:16
    }
})

export default style