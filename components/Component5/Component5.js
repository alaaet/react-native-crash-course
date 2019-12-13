import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class Component5 extends Component {
  constructor() {
    super();
    this.state = {
      userDataSource: [],
    };
    this.renderItem = this.renderItem.bind(this);
  }
  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => {
        this.setState({
          userDataSource: response,
        });
      });
  }
  componentDidMount() {
    this.fetchUsers();
  }
  onPress(input) {
    console.log(input.name);
  }
  renderItem(input) {
    console.log(input.item.name);
    var user = input.item;
    return (
      <TouchableHighlight onPress={() => this.onPress(user)}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{input.item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.userDataSource}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: 10,
    marginBottom: 3,
  },
  rowText: {
    flex: 1,
    fontSize: 18,
  },
});
