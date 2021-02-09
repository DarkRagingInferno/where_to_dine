import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import RouletteScreen from '../screens/RouletteScreen'
import FavouritesScreen from '../screens/FavouriteScreen'

const Tab = createBottomTabNavigator()

const MainScreen = ({ navigation }) => (
  <Tab.Navigator
    initialRouteName='Roulette'
    screenOptions={({ route }) => ({
      // TAB ICONS
      tabBarIcon: ({ focused, color, size }) => {
        let iconName

        if (route.name === 'Favourites') {
          iconName = focused ? 'heart' : 'heart-outline'
        } else if (route.name === 'Roulette') {
          iconName = 'ship-wheel'
        }

        return <Icon name={iconName} size={size} color={color} />
      },
    })}
    tabBarOptions={{
      activeBackgroundColor: 'transparent',
      // TAB COLOURS
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name='Roulette' component={RouletteScreen} />
    <Tab.Screen name='Favourites' component={FavouritesScreen} />
  </Tab.Navigator>
)

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: '100%',
//         backgroundColor: 'pink',
//     }
// })

export default MainScreen
