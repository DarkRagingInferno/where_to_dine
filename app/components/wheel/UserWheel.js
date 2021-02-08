import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import WheelItem from "./WheelItem";

const Wheel = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <WheelItem data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <WheelItem data={data[0]}></WheelItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default Wheel;
