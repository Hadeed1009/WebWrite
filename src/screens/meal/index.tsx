import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet from 'react-native-raw-bottom-sheet';
import Planner from './Planner';

const Meal = () => {
  const {height, width} = useWindowDimensions();

  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    StatusBar.setBarStyle('dark-content');
    bottomSheetRef.current?.open();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
    StatusBar.setBarStyle('dark-content');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.titleText, {fontSize: height * 0.0305}]}>
        2nd Task
      </Text>

      <TouchableOpacity onPress={openBottomSheet}>
        <Text style={[styles.titleText, {fontSize: height * 0.0305}]}>
          Open Bottom Sheet
        </Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        height={height * 0.85}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <Planner closeBottomSheet={closeBottomSheet} />
      </BottomSheet>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f9f7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
    textAlign: 'center',
  },
});
