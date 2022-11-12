import { StyleSheet,Dimensions } from "react-native";
const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:500,
       resizeMode:'cover',
       // alignItems:'center',
        justifyContent:'center',
      
        
    },
    title:{
        fontSize:70,
        fontWeight:'bold',
        color:'white',
        width:'70%',
        marginLeft:25,
    },
    button:{
        backgroundColor:'#fff',
        width:200,
        height:40,
        marginLeft:25,
        marginTop:25, 
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },
    btntext:{
        fontSize:16,
        fontWeight:'bold',
    },
    searchbtn:{
        backgroundColor:'#fff',
       width:Dimensions.get('screen').width - 20,
       marginHorizontal:10,
        height:60,
        marginLeft:10,
        marginTop:25, 
        borderRadius:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
       // position:'absolute',
        //top:50,
        borderWidth:2,
        borderColor:'#fff',
        position:'absolute',
        top:20,
        zIndex:100,
    
    },
    searchbtntext:{
        fontSize:16,
        fontWeight:'bold',
       
    }
    

});

export default styles;