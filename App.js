import React from "react";
import { Platform, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainScreen from "./app/screens/MainScreen";
import SwipeScreen from "./app/screens/SwipeStackScreen";
import FavouriteStackScreen from "./app/screens/FavouriteStackScreen";
import { PRIMARY, DISABLED } from "./app/components/constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator
          initialRouteName="Roulette"
          screenOptions={({ route }) => ({
            // TAB ICONS
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Favourites") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "Roulette") {
                iconName = "ship-wheel";
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeBackgroundColor: "transparent",
            // TAB COLOURS
            activeTintColor: PRIMARY,
            inactiveTintColor: DISABLED,
          }}
        >
          <Tab.Screen name="Swipe" component={SwipeScreen} />
          <Tab.Screen name="Roulette" component={MainScreen} />
          <Tab.Screen name="Favourites" component={FavouriteStackScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
