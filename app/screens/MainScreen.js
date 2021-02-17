import React, { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import RouletteScreen from "../screens/RouletteScreen";
// import FavouritesScreen from "../screens/FavouriteScreen";

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <Stack.Navigator 
      initialRouteName="Home" 
      mode="modal"
    >
      <Stack.Screen
        name="Roulette"
        component={RouletteScreen}
        options={{ headerTitleAlign: "center", headerShown: true, headerTransparent: false}}
      />
    </Stack.Navigator>
  );
};
// return (
//   <Tab.Navigator
//     initialRouteName="Roulette"
//     screenOptions={({ route }) => ({
//       // TAB ICONS
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === "Favourites") {
//           iconName = focused ? "heart" : "heart-outline";
//         } else if (route.name === "Roulette") {
//           iconName = "ship-wheel";
//         }

//         return <Icon name={iconName} size={size} color={color} />;
//       },
//     })}
//     tabBarOptions={{
//       activeBackgroundColor: "transparent",
//       // TAB COLOURS
//       activeTintColor: PRIMARY,
//       inactiveTintColor: DISABLED,
//     }}
//   >
//     <Tab.Screen name="Roulette" component={RouletteScreen} />
//     <Tab.Screen name="Favourites" component={FavouritesScreen} />
//   </Tab.Navigator>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: '100%',
//         backgroundColor: 'pink',
//     }
// })

export default MainScreen;
