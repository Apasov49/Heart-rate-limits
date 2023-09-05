// src/HeartRateLimits.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const HeartRateLimits = () => {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const calculateHeartRateLimits = (age) => {
    if (!age) {
      setLowerLimit('');
      setUpperLimit('');
      return;
    }

    const lower = Math.round((220 - parseInt(age)) * 0.65);
    const upper = Math.round((220 - parseInt(age)) * 0.85);

    setLowerLimit(lower.toString());
    setUpperLimit(upper.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
          setAge(text);
          calculateHeartRateLimits(text);
        }}
        value={age}
      />
      <Text style={styles.label}>Heart Rate Limits:</Text>
      <Text style={styles.limit}>Lower Limit: {lowerLimit}</Text>
      <Text style={styles.limit}>Upper Limit: {upperLimit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: 100,
    textAlign: 'center',
  },
  limit: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default HeartRateLimits;
