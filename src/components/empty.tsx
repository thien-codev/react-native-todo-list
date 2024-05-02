import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/nothing_image.png')}
      />
      <Text style={styles.title}>Nothing to do {"\n"} Click + to create your task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
  },
  title: {
    color: '#003f5c',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    top: -120
  }
});
