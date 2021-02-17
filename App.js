import React from 'react'
import { Platform, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import MainScreen from './app/screens/MainScreen'
import SwipeScreen from './app/screens/SwipeScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='Swipe'>
          <Stack.Screen name='Home' component={MainScreen} />
          <Stack.Screen
            name='Swipe'
            component={SwipeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
