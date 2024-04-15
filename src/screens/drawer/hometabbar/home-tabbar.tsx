import {TabRouter} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useIsLoggedIn} from '../../../helpers/use-is-logged-in';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TaskNavigator from './detail-navigaton/task-navigator';
import Profile from './profile';

function HomeTabbar({navigation}) {
  const Tab = createBottomTabNavigator();
  const [_, setIsLoggedIn] = useIsLoggedIn();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: true,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="TaskNavigator"
        component={TaskNavigator}
        options={{
          title: 'Tasks',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="card-text" color={color} size={30} />
          ),
          tabBarActiveTintColor: '#003f5c',
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={Profile}
        options={{
          title: 'Calendar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calendar-range-outline"
              color={color}
              size={30}
            />
          ),
          tabBarActiveTintColor: '#003f5c',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
          tabBarActiveTintColor: '#003f5c',
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabbar;
