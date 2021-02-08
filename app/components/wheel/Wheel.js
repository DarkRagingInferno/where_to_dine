import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Button,
  Easing,
  TouchableOpacity
} from "react-native";

import WheelItem from "./WheelItem";
import { dimensions, scaleFactorHeight } from "../../config/Utilities";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

TouchableOpacity.defaultProps = {activeOpactiy: 0.8};

const Wheel = (props) => {
  const [data, setData] = useState(props.data);
  const [chosen, setChosen] = useState(data[1]);

  let scale = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 8000,
      easing: Easing.in(Easing.easing),
      useNativeDriver: false,
    }).start();
    console.log("I fire once");
    return () => {
      console.log("Wheel Aborting...");
    };
  }, [chosen]);

  const resetSpin = () => {
    console.log("I was pressed so a reset :3");
    scale.setValue(0);
    setData(shuffle(data));
    setChosen(data[1]);
  };

  const range = scale.interpolate({
    inputRange: [0, 1],
    // 411 for new pixel 3 with no scroll
    // Dimensions keep changing, going to have to make sure output works moving forward.
    outputRange: [405, (dimensions.height / scaleFactorHeight) * 411.5 * data.length]
  });

  const animatedStyles = [
    styles.wheel,
    {
      top: range,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <Animated.View style={animatedStyles}>
          {data.map((dataItem, index) => (
            <WheelItem
              key={`${dataItem.id} ${index}`}
              data={dataItem}
            ></WheelItem>
          ))}
        </Animated.View>
      </View>
      <View style={styles.buttonContainer} >
        {/* <Button onPress={resetSpin} title="Tap To Spin!" color='crimson' textTransform='uppercase'/> */}
        <TouchableOpacity activeOpacity={1} onPress={resetSpin} style={styles.myButtonContainer}>
          <Text style={styles.myButtonText}>Tap To Spin!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
  },

  buttonContainer: {
    // position: 'absolute',
    width: "100%",
    justifyContent: 'flex-end',
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  wheel: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },


  myButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // backgroundColor: 'rgba(0, 0, 255, 1)'
    backgroundColor: 'crimson'

  },
  myButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: 'rgba(0, 255, 0, 1)'
  }

});

export default Wheel;
