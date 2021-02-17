import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import WheelContainer from "../components/wheel/WheelContainer";
import { apiKey, restaurantFetch } from "../components/constants/Constants";

const RouletteScreen = ({ navigation }) => {
  const [location, setLocation] = useState("Vancouver, BC");
  const [offset, setOffset] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    let url = `${restaurantFetch.url}&offset=${offset}&location=${location}`;

    let loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: abortController.signal,
          method: "GET",
          headers: {
            Authorization: apiKey.bearer,
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .catch((err) => {
            console.log(err);
          });

        let businessData = formatData(response.businesses);
        setData(businessData);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };

    loadData();
    return () => {
      console.log("Roulette Screen Aborting...");
      abortController.abort();
    };
  }, []); // PUT OFFSET HERE WHEN WE WANT IT TO CHANGE ON OFFSET UPDATE

  const formatData = (rawData) => {
    let data = rawData.map((restaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
      coordinates: restaurant.coordinates,
      location: restaurant.location,
      imageURL: restaurant.image_url,
      url: restaurant.url,
      rating: restaurant.rating,
      price: restaurant.price ? restaurant.price : "",
      phone: restaurant.phone ? restaurant.phone : "",
      display_phone: restaurant.display_phone ? restaurant.display_phone : "",
    }));
    return data;
  };
  return <View style={styles.container}>{data && <WheelContainer data={ data } />}</View>;
};

const styles = StyleSheet.create({
  container: {
    zIndex: -1
  }
})

export default RouletteScreen;
