import React from "react";
import { View, StyleSheet, Button } from "react-native";

import Wheel from "./Wheel";

const WheelContainer = (props) => (
  <View style={styles.container}>
    <Wheel data={props.data}></Wheel>
  </View>
);


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // alignSelf: "stretch",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default WheelContainer;
