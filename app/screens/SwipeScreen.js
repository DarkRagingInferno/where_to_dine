import React, { useState, useEffect, useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from 'react-native'
import SwipeCards from 'react-native-swipe-cards-deck'
import { apiKey, restaurantFetch } from '../components/constants/Constants'
import CardDeck from '../components/CardDeck'

const SwipeScreen = () => {
  const [location, setLocation] = useState('Vancouver, BC')
  const [offset, setOffset] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const formatData = (rawData) => {
    let data = rawData.map((restaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
      coordinates: restaurant.coordinates,
      location: restaurant.location,
      imageURL: restaurant.image_url,
      url: restaurant.url,
      rating: restaurant.rating,
      price: restaurant.price ? restaurant.price : '',
      phone: restaurant.phone ? restaurant.phone : '',
      display_phone: restaurant.display_phone ? restaurant.display_phone : '',
    }))
    return data
  }

  //   const swipeStack = () =>
  //     data &&
  //     data.map((restaurant) => {
  //       const pan = new Animated.ValueXY()
  //       const panResponder = PanResponder.create({
  //         onStartShouldSetPanResponder: (evt, gestureState) => true,
  //         onPanResponderMove: (evt, gestureState) => {
  //           pan.setValue({ x: gestureState.dx, y: gestureState.dy })
  //         },
  //         onPanResponderRelease: (evt, gestureState) => {},
  //       })

  //       return (
  //         <Animated.View
  //           {...panResponder.panHandlers}
  //           key={restaurant.id}
  //           style={[
  //             { transform: pan.getTranslateTransform() },
  //             {
  //               height: SCREEN_HEIGHT - 120,
  //               width: SCREEN_WIDTH,
  //               padding: 10,
  //               position: 'absolute',
  //             },
  //           ]}
  //         >
  //           {data && (
  //             <Image
  //               style={{
  //                 flex: 1,
  //                 height: null,
  //                 width: null,
  //                 resizeMode: 'cover',
  //                 borderRadius: 20,
  //               }}
  //               source={{ uri: restaurant.imageURL }}
  //             />
  //           )}
  //         </Animated.View>
  //       )
  //     })

  useEffect(() => {
    const abortController = new AbortController()
    let url = `${restaurantFetch.url}&offset=${offset}&location=${location}`

    let loadData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url, {
          signal: abortController.signal,
          method: 'GET',
          headers: {
            Authorization: apiKey.bearer,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .catch((err) => {
            console.log(err)
          })

        let businessData = formatData(response.businesses)
        setData(businessData)
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    }

    loadData()
    return () => {
      console.log('Roulette Screen Aborting...')
      abortController.abort()
    }
  }, []) // PUT OFFSET HERE WHEN WE WANT IT TO CHANGE ON OFFSET UPDATE

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{data && <CardDeck data={data} />}</View>
      <View style={{ height: 60 }}></View>
    </View>
  )
}

export default SwipeScreen
