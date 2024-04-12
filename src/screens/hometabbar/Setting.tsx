import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
  },
});

export default Setting;
