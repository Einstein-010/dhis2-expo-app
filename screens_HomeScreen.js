import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title>Welcome to DHIS2 Demo App</Title>
      <Button mode="contained" onPress={() => navigation.navigate('Data Entry')}>
        Data Entry
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Reports')}>
        Reports
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }
});