import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alaa',
      showName: true,
      message: this.props.message,
    };
  }
  static defaultProps = {
    message: 'Hello world!',
  };
  render() {
    console.log('Hello');
    let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View>
        <Text>{this.state.message} </Text>
        <Text>{name} </Text>
      </View>
    );
  }
}
