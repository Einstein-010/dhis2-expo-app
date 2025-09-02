import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function DataEntryForm({ formData, setFormData }) {
  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        style={styles.input}
      />
      <TextInput
        label="Age"
        value={formData.age}
        onChangeText={(text) => setFormData({ ...formData, age: text })}
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  input: { marginBottom: 10 }
});