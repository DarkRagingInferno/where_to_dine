import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

import { 
  normalize, 
  wheelItemHeight,
  wheelItemWidth,
  wheelItemPictureHeight,
  wheelItemPictureWidth } from "../../config/Utilities";

const WheelItem = (props) => {
  const [address, city, country] = props.data.location.display_address;


  const location = (
    <View style={styles.location}>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.address}>{city}</Text>
      <Text style={styles.address}>{country}</Text>
    </View>
  );

  const title =
    props.data.name.length < 31
      ? {
          fontSize: normalize(22),
          fontWeight: "bold",
          marginBottom: 8,
        }
      : props.data.name.length < 36
      ? {
          fontSize: normalize(19),
          fontWeight: "bold",
          marginBottom: 8,
        }
      : {
          fontSize: normalize(18),
          fontWeight: "bold",
          marginBottom: 8,
        };
  return (
    <View style={styles.container}>
      {(props.data.name && <Text style={title}>{props.data.name}</Text>) ||
        null}
      <View style={styles.pictureDimensions}>
        {(props.data.imageURL && (
          <ImageBackground source={{ uri: props.data.imageURL }} style={styles.image} />
        )) ||
          null}
      </View>
      <Text>
        {(props.data.rating && (
          <Text style={styles.info}>
            <Text style={styles.bold}>Rating:</Text>
            <Text> {props.data.rating} </Text>
          </Text>
        )) ||
          null}
        {(props.data.price && (
          <Text style={styles.info}>
            <Text style={styles.bold}>Price:</Text>
            <Text> {props.data.price}</Text>
          </Text>
        )) ||
          null}
      </Text>

      {props.data.location && location}
      {(props.data.display_phone && (
        <Text style={styles.info}>
          <Text style={styles.bold}>Tel:</Text>
          {props.data.display_phone}
        </Text>
      )) ||
        null}
    </View>
  );
};

const styles = StyleSheet.create({
  address: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  container: {
    width: wheelItemWidth,
    height: wheelItemHeight,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 25,
    fontSize: 16,
    padding: 10,
    paddingTop: 15

  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 3,
    zIndex: -1
  },
  info: {
    fontSize: 16,
    margin: 5,
  },
  location: {
    alignItems: "center",
  },
  pictureDimensions: {
    width: wheelItemPictureWidth,
    height: wheelItemPictureHeight
  }

});

export default WheelItem;
