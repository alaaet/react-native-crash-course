import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const users = [
  {name: 'John Doe'},
  {name: 'Brad Traversy'},
  {name: 'Alaa Abuiteiwi'},
  {name: 'Steve Smith'},
];

export default class Component4 extends Component {
  constructor() {
    super();
    this.state = {
      data: users.map((item, index) => ({
        title: item.name,
        key: index.toString(),
      })),
    };
  }
  renderItem(input) {
    console.log(input.item.title);
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{input.item.title}</Text>
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
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
