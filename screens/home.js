import React from 'react';
import { ScrollView, StyleSheet, TextInput, Text } from 'react-native';
import { View } from 'react-native-animatable';
import Header from '../component/header';
import Cards from '../component/cards';
import { FontAwesome } from '@expo/vector-icons';




function HomeScreen () {

  return (
    <ScrollView style={styles.container} >
      <Header/>
      <View >
        <Text style={{ fontSize: 20, marginLeft: 18, fontFamily: 'poppins-bold', marginTop: 5, color: "#bc8c4c" }}>Meals List</Text>
      </View>
      <View style={styles.search}>
        <TextInput
            style={styles.TextInput}
            placeholder="Search"
            placeholderTextColor="#C1C0BB"
          />
      
      <FontAwesome name="search" size={30} color="#F2C978" />
      </View>
      <Cards/>
     
    </ScrollView>
)
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#EBE9E6",
  },
  search:{
    display:'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'space-around',
    marginRight: 15,
    paddingVertical:12,
    
  },
  TextInput: {
    height: 40,
    width:"80%",
    padding: 10,
    marginLeft: 10,
    backgroundColor: "#ffff",
    borderRadius: 5,
    fontFamily:'poppins-regular'

  }
});

export default HomeScreen;