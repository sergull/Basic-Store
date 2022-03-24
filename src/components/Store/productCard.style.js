import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({

    container:{
        backgroundColor:"#eceff1",
        padding:10,
        margin:5,
        borderRadius:5,
        flex:1
    },
    image:{
        borderRadius:5,
        height:Dimensions.get("window").height/3.5,
        resizeMode: "stretch",
        flex:1,
        marginBottom:5
    },    
    title:{
        fontWeight:"bold",
        fontSize:17,
        paddingBottom:5,
    },
    price:{
        fontSize:15,
        color:"gray",
        marginBottom:5
    },

    stock:{
        color:"red",
        fontWeight:"bold",
    }
});