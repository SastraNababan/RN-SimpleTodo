import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput'
import TodoItems from './components/TodoItems'
import TodoFooter from './components/TodoFooter'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <TodoInput/>
        <TodoItems/>
        <TodoFooter/>
      </View>
 
    );
  }
}
 
