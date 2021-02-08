import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import UserWheel from "../components/wheel/UserWheel";
import { apiKey, restaurantFetch } from "../components/constants/Constants";

const FavouritesScreen = ({ navigation }) => {
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
      console.log("Favourite Screen Aborting...");
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

  return (
    <SafeAreaView>
        {data && <UserWheel data={data} />}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf: "stretch",
    // alignItems: "center",
  },
});

export default FavouritesScreen;
