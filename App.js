import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View>
      <Text>Olá mundo</Text>
      <StatusBar hidden={true} />
    </View>
  );
}