import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import SwipeComponent from './components/SwipeComponent';

export default function App() {

  const onRightSwipe = () => {
    console.log('Right Swipe')
  }

  const onLeftSwipe = () => {
    console.log('Left Swipe')
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="phone" size={40} color="#40394a" />
          <SwipeComponent onRightSwipe={onRightSwipe} onLeftSwipe={onLeftSwipe} />
          <Icon name='phone-cancel' size={40} color="#40394a" />
        </View>
        <Text style={styles.text}>
          Swipe right or left
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  iconContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  }
});