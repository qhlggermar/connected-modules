import React, { useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, Animated, Easing } from 'react-native';

const App = ({ navigation }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const navigateToAdminLogin = () => {
      navigation.navigate("AdminLogin");
    };

    const animation = Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      )
    ).start();

    const timeout = setTimeout(navigateToAdminLogin, 4000);

    return () => {
      animation.stop();
      clearTimeout(timeout);
    };
  }, [spinValue, navigation]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.backgroundColor}></View>
      <Animated.Image
        source={require('../assets/logo.png')}
        style={[styles.logo, { transform: [{ rotate: spin }] }]}
      />
      <Text style={styles.text}>VIMOS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColor: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#064167', 
  },
  logo: {
    width: 500,
    height: 180,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontSize: 64,
    color: '#FFBB05',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
