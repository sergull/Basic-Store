import React from "react";
import { View,Text,Image } from "react-native";
import styles from "./productCard.style";

const productCard = ({product})=>{

    return(
        
        <View style={styles.container}>
           <Image style={styles.image} source={{uri: product.imgURL}}></Image>
           <View>
               <Text style={styles.title} >{product.title}</Text>
               <Text style= {styles.price}>{product.price}</Text>
               <Text style={styles.stock}>
                   STOKTA YOK
                </Text>
           </View>
        </View>
    );
};

export default productCard;