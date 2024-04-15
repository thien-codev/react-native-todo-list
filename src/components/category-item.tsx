import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';

function CategoryItem({
  title,
  selected,
  onPress,
}: {
  title: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={selected ? styles.selectedContainer : styles.container}>
        <Text style={selected ? styles.selectedText : styles.text}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: 'auto',
    height: 36,
    borderRadius: 18,
    backgroundColor: 'lightgray',
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  selectedContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 'auto',
    height: 36,
    borderRadius: 18,
    backgroundColor: '#003f5c',
    marginRight: 10,
  },
  selectedText: {
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
});

export default CategoryItem;