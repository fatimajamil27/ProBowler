import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to ProBowler</Text>

      <View style={styles.navBar}>
        <Text style={styles.navText}>Track</Text>
        <Text style={styles.navText}>Analyze</Text>
        <Text style={styles.navText}>Improve</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/bowler.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f111d',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  header: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#1a1c2c',
    paddingVertical: 10,
    marginVertical: 10,
  },
  navText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  imageContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  caption: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff5c1d',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
