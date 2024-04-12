/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Login from './src/screens/Login';
import HomeTabbar from './src/screens/hometabbar/HomeTabbar';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useIsLoggedIn } from './src/helpers/useIsLoggedIn';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn] = useIsLoggedIn();
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplash(false);
    }, 3500);
    return () => clearTimeout(timeout);
  });

  return (
    <NavigationContainer>
      {isSplash ? (
        <Splash />
      ) : (
        <Stack.Navigator
          initialRouteName={isLoggedIn ? 'HomeTabbar' : 'Login'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeTabbar" component={HomeTabbar} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
