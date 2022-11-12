import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    Container:{
        margin:20,
        //backgroundColor:'red',

    },
    Image:{
        width:'100%',
        aspectRatio:2/2,
        resizeMode:'cover',
        borderRadius:10,
        
    },
    Bedrooms:{
        marginVertical:10,
        color:'#5b5b5b',
    },
    des:{
        fontSize:18,
        lineHeight:26,
    },
    prices:{
        fontSize:18,
    },
    oldprices:{
        color:'#5b5b5b',
        textDecorationLine:'line-through',
    },
    newprices:{
        fontWeight:'bold',

    },
    totalprices:{
        color:'#5b5b5b',
        textDecorationLine:'underline',
    },

});
export default styles; 