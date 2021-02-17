import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import FavouriteScreen from "./FavouriteScreen";

const Stack = createStackNavigator();

const SwipeStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home" mode="modal">
      <Stack.Screen
        name="Swipe"
        component={FavouriteScreen}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default SwipeStackScreen;
