import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Component2 extends Component {
  onPress1() {
    this.setState(state => ({
      count1: ++state.count1,
    }));
    console.log('Area 1 pressed: ' + this.state.count1 + ' times');
  }
  onPress2() {
    this.setState(state => ({
      count2: ++state.count2,
    }));
    console.log('Area 2 pressed: ' + this.state.count2 + ' times');
  }
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
    this.onPress1 = this.onPress1.bind(this);
    this.onPress2 = this.onPress2.bind(this);
  }
  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>Hello Alaa </Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress1}
            underlayColor="blue">
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
            <View>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.v3}>
            <Text style={styles.v3text}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {backgroundColor: 'blue'},
  myText: {color: 'white'},
  container: {flexDirection: 'row', height: 100},
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  v3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  v3text: {
    color: 'white',
  },
});
