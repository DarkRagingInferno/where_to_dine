import React, { useCallback } from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import FavouriteScreen from "../screens/FavouriteScreen";

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FavouriteStackScreen = ({ navigation }) => {

  const doSomething = () => {
    alert("From A to Z (Not Amazon lul! ;P)")
  }

  return (
    <Stack.Navigator initialRouteName="Home" mode="modal">
      <Stack.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity onPress={doSomething}style={styles.headerRight}>
              <Text style={styles.headerRightText}>A-Z</Text>
            </TouchableOpacity>
            // <Button
            // onPress={() => alert('This is a button!')}
            // title="A-Z"
            // color="#000"
            // />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10
  },
  headerRightText: {
    color: "#0072F7"
  }
})
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

export default FavouriteStackScreen;
