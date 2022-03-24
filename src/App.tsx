import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput  } from 'react-native';
import store_data from "./store_data.json";
import Product from './components/Store';


export default function App() {

  return (

    <SafeAreaView style={styles.container}>

      <TextInput style={styles.input} placeholder='Ara...'/>


      <FlatList
        style={styles.list}
        data={store_data}
        renderItem={({item})=> <Product product={item}/>}
        keyExtractor={(item)=>item.id.toString()}
        horizontal={false}
        numColumns={2}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    margin:10,
    
  },
   input:{
     marginBottom:10,
     marginTop:10,
     padding:15,
     borderRadius:5,
     backgroundColor:"#eceff1",
   },
   list:{
    borderRadius:5,
   }
});
