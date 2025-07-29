import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Loader = ({ size = 60, color = '#6200ee' }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const radius = size / 2 - 5;

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Svg height={size} width={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="4"
            strokeDasharray="40 20"
            strokeLinecap="round"
            fill="none"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;