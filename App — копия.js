import React from 'react';
import { StyleSheet, Text, View, TextInput, ListView, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    title: 'Hello, World'
  }

  handleTitle = (text) => {
    this.setState({title: text})
  }

  handleRollback = () => {
    this.setState({title: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <TextInput 
          style={styles.input}
          underlineColorAndroid = "transparent"
          autoCapitalize = "none"
          value={this.state.title === '' ? '' : this.state.title}
          onChangeText = {this.handleTitle}
        />
        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
            () => this.setState({title: ''})
          }>
          <Text style = {styles.submitButtonText}> Rollback </Text>
        </TouchableOpacity>
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
submitButtonText:{
  color: 'white'
}
});
