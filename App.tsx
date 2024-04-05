/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplash(false);
    }, 3500);
    return () => clearTimeout(timeout);
  });

  const initialRoute = () => {
    
  }

  return (
    <NavigationContainer>
      {isSplash ? (
          <Splash/>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
