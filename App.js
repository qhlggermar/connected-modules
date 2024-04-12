import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import SplashScreen from './components/SplashScreen';


function AdminLoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    navigation.navigate('HomePage');
  };

  const handleForgotPassword = () => {
    // Add logic for handling forgot password
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>VIMOS</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.AdminText}>ADMIN<Text style={styles.loginText}>LOGIN</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182933',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#182933',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontFamily: 'Libre Franklin',
    fontSize: 52,
    color: '#FFBB05',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#FFBB05',
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: 'center',
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
  },
  AdminText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
  },
  loginText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  loginButton: {
    width: '85%',
    height: 50,
    backgroundColor: '#182933',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 15,
    marginTop: 10,
    color: 'black',
  },
});


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
