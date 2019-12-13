import React, {Component} from 'react';
import {Switch, Text, TextInput, View} from 'react-native';

export default class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      textValue: null,
      switchValue: false,
    };
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(value) {
    this.setState(state => ({textValue: value}));
  }
  onSubmitEditing(e) {
    console.log('Text submitted....');
  }
  onSwitchChanged(value) {
    this.setState(state => ({switchValue: value}));
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter text"
          value={this.state.textValue}
          onChangeText={value => this.onChangeText(value)}
          onSubmitEditing={this.onSubmitEditing}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={value => this.onSwitchChanged(value)}
        />
      </View>
    );
  }
}
