import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Theme = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={navigation.openDrawer}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={'#003f5c'}
            size={34}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Theme</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#003f5c',
    alignSelf: 'center',
    bottom: 26,
  },
  topBar: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
  },
});

export default Theme;
