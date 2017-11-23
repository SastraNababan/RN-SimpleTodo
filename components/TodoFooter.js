import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'

const TodoFooter =(props)=>(
  <View style={styles.footer}>
    <Text style={styles.FooterText}>Total Item : {props.total}</Text>
  </View>
)

export default TodoFooter

const styles = StyleSheet.create({
  Footer:{
    borderTopWidth:1,
    borderTopColor:'#CCC',
    paddingTop:20,
    paddingBottom:20
  },
  FooterText:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  }
});
