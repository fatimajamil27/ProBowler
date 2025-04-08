import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      <Text style={styles.subtitle}>Log in to access your personalized bowling analysis</Text>

      
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Your email address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      
      <TouchableOpacity>
        <Text style={styles.forgot}>Forget your password?</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.divider} />
      </View>

    
      <TouchableOpacity style={styles.socialBtn}>
        <FontAwesome name="apple" size={20} color="#000" />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#FEECEC' }]}>
        <AntDesign name="google" size={20} color="#DB4437" />
        <Text style={[styles.socialText, { color: '#DB4437' }]}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#E7F3FF' }]}>
        <FontAwesome name="facebook" size={20} color="#1877F2" />
        <Text style={[styles.socialText, { color: '#1877F2' }]}>Continue with Facebook</Text>
      </TouchableOpacity>

      
      <Text style={styles.signup}>
        Need to create an account?
        <Text style={styles.signupLink}> Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#fff',
  },
  forgot: {
    color: '#FF6347',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginBtn: {
    backgroundColor: '#FF4C29',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  orText: {
    color: '#999',
    marginHorizontal: 10,
  },
  socialBtn: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  socialText: {
    fontSize: 14,
    color: '#000',
  },
  signup: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
  signupLink: {
    color: '#FF6347',
  },
});
