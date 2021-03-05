import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { wheelItemWidth, wheelItemHeight } from '../config/Utilities'
import SwipeCards from 'react-native-swipe-cards-deck'
import WheelItem from './wheel/WheelItem'

const NoMoreCards = () => {
  return (
    <View>
      <Text style={styles.noMoreCardsText}>No more cards</Text>
    </View>
  )
}

const Card = ({ cardData }) => {
  return (
    <View style={styles.card}>
      <WheelItem key={cardData.id} data={cardData}></WheelItem>
    </View>
  )
}

const CardDeck = ({ data }) => {
  const [yupList, setYupList] = useState([])
  const [nopeList, setNopeList] = useState([])

  const handleYup = (card) => {
    console.log(`Liked ${card.name}`)
    setYupList([...yupList, card])
    return true
  }

  const handleNope = (card) => {
    console.log(`Noped ${card.name}`)
    setNopeList([...nopeList, card])
    return true
  }

  return (
    <SwipeCards
      cards={data}
      renderCard={(cardData) => <Card cardData={cardData} />}
      keyExtractor={(cardData) => cardData.id}
      renderNoMoreCards={() => <NoMoreCards />}
      //   stack={true}
      //   stackDepth={2}
      handleYup={handleYup}
      handleNope={handleNope}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: wheelItemWidth,
    // height: wheelItemHeight,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
})

export default CardDeck
