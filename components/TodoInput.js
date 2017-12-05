import React, { Component } from 'react'
import { View,TextInput,Button,StyleSheet } from 'react-native'

export default class TodoInput extends Component {
  state={
    item:''
  }
  _addItem(){
    this.props.actionAdd(this.state.item)
    this.setState({item:''})
  }
  render() {
    return (
      <View style={styles.InputContainer}>
        <TextInput 
          style={styles.InputBox} 
          placeholder='Type here...' 
          onChangeText={item => this.setState({item:item})}
          value={this.state.item} />
        <Button title ="Add" onPress={()=> this._addItem()}/>
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