import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import DataEntryScreen from './screens/DataEntryScreen';
import ReportsScreen from './screens/ReportsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Data Entry" component={DataEntryScreen} />
          <Stack.Screen name="Reports" component={ReportsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}