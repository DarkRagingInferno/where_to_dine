import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import SwipeScreen from './SwipeScreen'

const Stack = createStackNavigator()

const SwipeStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Home' mode='modal'>
      <Stack.Screen
        name='Swipe'
        component={SwipeScreen}
        options={{ headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  )
}

export default SwipeStackScreen
