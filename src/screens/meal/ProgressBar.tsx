import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Custom_ProgressBar from '../../components/Custom_ProgressBar';

const ProgressBar = () => {
  const [data, setData] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={[styles.titleText]}>Calories</Text>
        <TextInput
          placeholder="Calories"
          style={styles.calorieInput}
          placeholderTextColor="#BDBDBD"
          keyboardType="numeric"
          value={data}
          onChangeText={text => setData(text)}
        />
      </View>
      <View style={styles.progressView}>
        <Custom_ProgressBar data={data} setData={setData} />
      </View>
      <View style={styles.bottomView}>
        <View style = {styles.textSeparator}>
          <Text style={[styles.mainText]}>100</Text>
          <Text style={[styles.subText]}>cal</Text>
        </View>
        <View style = {styles.textSeparator}>
          <Text style={[styles.mainText]}>2.5</Text>
          <Text style={[styles.subText]}>kcal</Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerView: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },

  titleText: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Semiold',
    color: '#2A0B37',
  },

  calorieInput: {
    height: '60%',
    width: '70%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: '#2A0B37',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily: 'Ubuntu-Regular',
  },

  progressView: {
    height: '30%',
    justifyContent: 'center',
  },

  bottomView: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },

  textSeparator:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  mainText: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
  },

  subText: {
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
    marginTop: '5%',
    marginLeft: '2%',
  },
});
