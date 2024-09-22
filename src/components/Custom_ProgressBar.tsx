import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface ProgressBarProps {
  data: string;
  setData: (value: string) => void;
}

const Custom_ProgressBar: React.FC<ProgressBarProps> = ({data, setData}) => {
  const [progress, setProgress] = useState(0);
  const animatedProgress = useRef(new Animated.Value(0)).current;
  const progressBarWidth = useRef(0);

  const maxValue = 2500;
  const minValue = 100;

  useEffect(() => {
    const progress = calculateProgress(data);
    setProgress(progress);

    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [data]);

  const calculateProgress = (value: string) => {
    let newValue = parseInt(value);
    if (isNaN(newValue)) {
      newValue = 0;
    }
    if (newValue < minValue) {
      newValue = minValue;
    }
    if (newValue > maxValue) {
      newValue = maxValue;
    }

    const range = maxValue - minValue;
    const progressPercentage = ((newValue - minValue) / range) * 100;

    return progressPercentage;
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (
        event: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        const x = gestureState.moveX;

        const newProgress = (x / progressBarWidth.current) * 100;
        if (newProgress >= 0 && newProgress <= 100) {
          setProgress(newProgress);
          animatedProgress.setValue(newProgress);

          const newValue = Math.round(
            minValue + (newProgress / 100) * (maxValue - minValue),
          );
          setData(newValue.toString());
        }
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <View
        style={styles.progressBarBackground}
        onLayout={event => {
          progressBarWidth.current = event.nativeEvent.layout.width;
        }}>
        <View style={styles.progressLine} />

        <Animated.View
          style={[
            styles.progressBar,
            {
              width: animatedProgress.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />

        <Animated.View
          style={[
            styles.thumb,
            {
              left: animatedProgress.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
          {...panResponder.panHandlers}
        >
          <FontAwesome6 name="square" size={20} color="#4F94F0" />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
  progressBarBackground: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },

  progressLine: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: [{translateY: -0.5}],
  },

  progressBar: {
    height: '50%',
    backgroundColor: '#2A0B37',
    borderRadius: 10,
  },
  thumb: {
    position: 'absolute',
    top: 0,
    width: '13%',
    height: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    transform: [{translateX: -10}],
  },
});

export default Custom_ProgressBar;
