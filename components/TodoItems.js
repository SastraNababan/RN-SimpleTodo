import React, { Component } from 'react'
import { View,Text,Button,StyleSheet } from 'react-native'

const itemStyle=(done)=>{
  if (done==true){
    return {
      textDecorationLine: 'line-through'
    }
  }
}

const TodoItem =(props)=>(
  <View style={styles.TodoItem}>
    <Text style={[{flex:2},itemStyle(props.done)]}>{props.item}</Text>
    <Button title='Finish' onPress={()=>props.actionFinish(props.ID)}/>
    <Button title='Delete' onPress={()=>props.actionDelete(props.ID)}/>
  </View>
)

export default class TodoItems extends Component {
  state = {  }
  render() {
    let todos=this.props.todos
    return (
      <View style={styles.Container}>
      {
        todos.map((todo)=>(
          <TodoItem 
            key={todo.ID} 
            item={todo.item}
            actionFinish={this.props.actionFinish}
            actionDelete={this.props.actionDelete}
            ID={todo.ID}
            done={todo.done}

            
            />
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