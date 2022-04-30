import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SwipeComponent({ onRightSwipe, onLeftSwipe }) {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
      },
    ], { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dx > 120) {
        onRightSwipe()
      } else if (gesture.dx < -120) {
        onLeftSwipe()
      }
      Animated.spring(
        pan,
        { toValue: { x: 0, y: 0 }, useNativeDriver: false }
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={pan.getLayout()}
      >
        <Icon name='hand-pointing-up' size={40} color="#40394a" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"  
  }
});
