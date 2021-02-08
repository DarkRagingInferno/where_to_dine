import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

import RouletteScreen from "../screens/RouletteScreen";
import FavouritesScreen from "../screens/FavouriteScreen";

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => (
    <Tab.Navigator
      initialRouteName="Roulette"
      tabBarOptions={{
        activeBackgroundColor: "transparent",
      }}
    >
      <Tab.Screen name="Roulette" component={RouletteScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: '100%',
//         backgroundColor: 'pink',
//     }
// })

export default MainScreen;
