import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ToastAndroid,
  Pressable,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {formatDate} from '../../../utils/helper';
import ProgressBar from './ProgressBar';

type PlannerProps = {
  closeBottomSheet: () => void;
};

const Planner: React.FC<PlannerProps> = ({closeBottomSheet}) => {
  const {height, width} = useWindowDimensions();
  const currentDate = formatDate();
  return (
    <View style={styles.container}>
      <View style={[styles.headerView, {height: height * 0.1}]}>
        <FontAwesome6
          name="xmark"
          size={24}
          color="#2A0B37"
          solid
          onPress={closeBottomSheet}
        />
        <Text style={[styles.titleText]}>Calorie Planner</Text>
        <Pressable
          onPress={() => {
            ToastAndroid.show('Save', ToastAndroid.SHORT);
            closeBottomSheet();
          }}>
          <Text style={[styles.subText]}>Save</Text>
        </Pressable>
      </View>

      <View
        style={[
          styles.calenderView,
          {height: height * 0.07, width: width * 0.9},
        ]}>
        <Pressable>
          <FontAwesome6 name="chevron-left" size={22} color="#2A0B37" />
        </Pressable>
        <View style={styles.dateWrapper}>
          <FontAwesome6 name="calendar" size={24} color="#BDBDBD" />
          <Text style={styles.dateText}>{currentDate}</Text>
        </View>
        <Pressable>
          <FontAwesome6 name="chevron-right" size={22} color="#2A0B37" />
        </Pressable>
      </View>

      <View
        style={[
          styles.progressView,
          {height: height * 0.22, width: width * 0.9},
        ]}>
        <ProgressBar />
      </View>
    </View>
  );
};

export default Planner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  titleText: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Semiold',
    color: '#2A0B37',
  },

  subText: {
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    color: '#4F94F0',
  },

  calenderView: {
    alignSelf: 'center',
    backgroundColor: '#EFF2FD',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateText: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'Ubuntu-Bold',
    color: '#2A0B37',
  },

  progressView: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: '10%',
  },
});
