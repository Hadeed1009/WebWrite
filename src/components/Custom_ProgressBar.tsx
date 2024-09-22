import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

interface ProgressBarProps {
  data: string;
}

const Custom_ProgressBar: React.FC<ProgressBarProps> = ({data}) => {
  const [progress, setProgress] = useState(0);
  const animatedProgress = useRef(new Animated.Value(0)).current;

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
    const progressPercentage = ((newValue - 100) / range) * 100;

    return progressPercentage;
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2A0B37',
    borderRadius: 10,
  },
  progress: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#4caf50',
  },

  progressBarBackground: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Custom_ProgressBar;
