import React, { Component } from 'react'
import { View,TextInput,Button,StyleSheet } from 'react-native'

export default class TodoInput extends Component {
  render() {
    return (
      <View style={styles.InputContainer}>
        <TextInput style={styles.InputBox} placeholder='Type here...'/>
        <Button title ="Add" onPress={()=> null}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  InputContainer:{
    marginBottom:30,
    marginTop:50
  },
  InputBox:{
    padding:15,
    backgroundColor:"#F1F1F1",
  }
});