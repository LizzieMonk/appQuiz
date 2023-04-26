
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './screens/Menu';
import Question from './screens/Question';
import Rating from './screens/Rating';

const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen
          name="Question"
          component={Question}
          options={{
            // headerShown: false,
          }}/>
          <Stack.Screen
          name="Rating"
          component={Rating}
          options={{
            // headerShown: false,
          }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}