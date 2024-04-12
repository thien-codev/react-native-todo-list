import {TabRouter} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useIsLoggedIn} from '../../helpers/useIsLoggedIn';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Setting from './Setting';

function HomeTabbar({navigation}) {
  const Tab = createBottomTabNavigator();
  const [_, setIsLoggedIn] = useIsLoggedIn();
  const goBack = () => {
    setIsLoggedIn(false);
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerShadowVisible: true,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarActiveTintColor: '#003f5c',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
          tabBarActiveTintColor: '#003f5c',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
  },
});

export default HomeTabbar;
