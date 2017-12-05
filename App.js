import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput'
import TodoItems from './components/TodoItems'
import TodoFooter from './components/TodoFooter'

const unique_ID = () => {
  return Math.random().toString(36).substr(2,4);
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this._actionAdd=this._actionAdd.bind(this)
    this._actionFinish=this._actionFinish.bind(this)
    this._actionDelete=this._actionDelete.bind(this)
  }
  
  state={
    todos:[
      {ID:1,item:'Todo Item #1',done:false},
      {ID:2,item:'Todo Item #2',done:false},
      {ID:3,item:'Todo Item #3',done:false},
    ]
  }

  _actionAdd(item,done=false){
    let ID=unique_ID()
    let todos=this.state.todos
    this.setState({
      todos:[...todos,{ID,item,done}]
    })
  }

  _actionFinish(ID){
    let todos=this.state.todos
    let newTodos=todos.map(todo => {
      if(todo.ID == ID){
        todo.done = !todo.done
      }
      return todo
    })
    this.setState({
      todos:newTodos
    })
    

  }

  _actionDelete(ID){
    let todos=this.state.todos
    let newTodos=todos.filter(todo => todo.ID !== ID)
    this.setState({
      todos:newTodos
    })
  }


  render() {
    return (
      <View>
        <TodoInput actionAdd={this._actionAdd}/>
        <TodoItems todos={this.state.todos} 
          actionFinish={this._actionFinish} 
          actionDelete={this._actionDelete} />
        <TodoFooter total={this.state.todos.length}/>
      </View>
 
    );
  }
}
 
