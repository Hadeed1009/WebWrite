import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {formatDate} from '../../../utils/helper';

const DateSwitcher = () => {
  const [viewMode, setViewMode] = useState<'Daily' | 'Weekly'>('Daily');
  const currentDate = formatDate();
  return (
    <View style={styles.dateContainer}>
      <View style={styles.dateLeft}>
        <TouchableOpacity>
          <FontAwesome6 name="chevron-left" size={22} color="#99A69D" />
        </TouchableOpacity>
        <View style={styles.dateWrapper}>
          <FontAwesome6 name="calendar" size={24} color="#50C878" />
          <Text style={styles.dateText}>{currentDate}</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome6 name="chevron-right" size={22} color="#99A69D" />
        </TouchableOpacity>
      </View>

      <View style={styles.viewModeToggle}>
        <TouchableOpacity
          onPress={() => setViewMode('Daily')}
          style={[
            styles.toggleButton,
            viewMode === 'Daily' && styles.activeToggle,
          ]}>
          <Text
            style={[
              styles.toggleText,
              viewMode === 'Daily' && styles.activeText,
            ]}>
            Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setViewMode('Weekly')}
          style={[
            styles.toggleButton,
            viewMode === 'Weekly' && styles.activeToggle,
          ]}>
          <Text
            style={[
              styles.toggleText,
              viewMode === 'Weekly' && styles.activeText,
            ]}>
            Weekly
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DateSwitcher;

const styles = StyleSheet.create({
  dateContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },

  dateLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
  },

  dateText: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'Ubuntu-Bold',
    color: '#50C878',
  },

  viewModeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#e0e0e0',
    width: '40%',
    height: '70%',
  },

  toggleButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  activeToggle: {
    backgroundColor: '#50C878',
  },

  toggleText: {
    fontSize: 16,
    color: '#000',
  },

  activeText: {
    color: '#fff',
  },
});
