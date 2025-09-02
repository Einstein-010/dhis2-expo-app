import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import DataEntryForm from '../components/DataEntryForm';
import { sendDataToDHIS2 } from '../services/dhis2';

export default function DataEntryScreen() {
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleSubmit = async () => {
    const response = await sendDataToDHIS2(formData);
    alert(response ? 'Data sent successfully!' : 'Failed to send data.');
  };

  return (
    <View style={styles.container}>
      <DataEntryForm formData={formData} setFormData={setFormData} />
      <Button mode="contained" onPress={handleSubmit}>Submit</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' }
});