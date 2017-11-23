import React, { Component } from 'react'
import { View,Text,Button,StyleSheet } from 'react-native'
 
let todos =[
  {ID:1,item:'Todo Item #1',done:false},
  {ID:2,item:'Todo Item #2',done:false},
  {ID:3,item:'Todo Item #3',done:false},
]

const TodoItem =(props)=>(
  <View style={styles.TodoItem}>
    <Text style={{flex:2}}>{props.item}</Text>
    <Button title='Finish' onPress={()=>null}/>
    <Button title='Delete' onPress={()=>null}/>
  </View>
)

export default class TodoItems extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.Container}>
      {
        todos.map((todo)=>(
          <TodoItem key={todo.ID} item={todo.item}/>
        ))
      }
       

        {/* <View style={styles.TodoItem}>
          <Text style={{flex:2}}>Todo Item #2</Text>
          <Button title='Finish' onPress={()=>null}/>
          <Button title='Delete' onPress={()=>null}/>
        </View>
        <View style={styles.TodoItem}>
          <Text style={{flex:2}}>Todo Item #3</Text>
          <Button title='Finish' onPress={()=>null}/>
          <Button title='Delete' onPress={()=>null}/>
        </View> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    // flex:1
  },
  TodoItem:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'#F1F1F1',
    padding:15,
  }
});