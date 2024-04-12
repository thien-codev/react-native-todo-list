import {Image, StyleSheet, Animated} from 'react-native';
import {useRef, useEffect} from 'react';

const Splash = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => {
      fadeIn();
    }, 1000);
  });

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Image source={require('../assets/splash.png')} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: '#003f5c',
  },
});

export default Splash;
