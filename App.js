import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';

export default class App extends React.Component {
  state = {
    newTask: '',
    tasks: [
      {key:'1', title:'gym'},
      {key:'2', title:'shop'},
      {key:'3', title:'suicide'},
    ]
  }

  handleNewTaskName = (text) => {
    this.setState({newTask: text})
    
  }

  handleAddTask = () => {
    let count = 0
    nextKey = String(Math.max(...this.state.tasks.map((key, task) => count += 1)))
    this.setState({tasks:[...this.state.tasks,{key:nextKey, title: this.state.newTask}]})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter Task</Text>
        <TextInput 
          style={styles.input}
          underlineColorAndroid = "transparent"
          autoCapitalize = "none"
          onChangeText = {this.handleNewTaskName}
        />
        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {this.handleAddTask}
        >
          <Text style = {styles.submitButtonText}> Rollback </Text>
        </TouchableOpacity>
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    paddingTop: 23
  },
  title: {
    margin: 15
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  },
  list: {
    margin: 15
  }
});
