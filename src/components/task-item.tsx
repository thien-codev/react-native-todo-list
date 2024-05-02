import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Task} from '../types/task';

function TaskItem({item, onPress}: {title: Task; onPress: () => void}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            size={30}
            color={'darkgrey'}></MaterialCommunityIcons>
          <View style={{marginLeft: 10, gap: 5}}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={{color: 'gray', fontSize: 12}}>Description</Text>
          </View>
          <MaterialCommunityIcons
            style={{position: 'absolute', right: 10}}
            name="flag-outline"
            size={30}
            color={'darkgrey'}></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: 'auto',
    height: 60,
    borderRadius: 12,
    backgroundColor: '#eaedf0',
    marginBottom: 8,
    margin: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
  },
  text: {
    fontWeight: 'bold',
    color: '#09354d',
  },
});

export default TaskItem;
