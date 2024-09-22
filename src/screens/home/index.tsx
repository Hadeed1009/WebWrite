import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Header from './Header';
import Detail from './Detail';
import ProgressBox from './ProgressBox';
import DateSwitcher from './DateSwitcher';

const Home = () => {
  const {height, width} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{height: height * 0.12}}>
          <Header />
        </View>

        <View style={{height: height * 0.08}}>
          <DateSwitcher />
        </View>

        <Text style={[styles.titleText, {fontSize: height * 0.0305}]}>
          Nutrition
        </Text>

        <Detail
          image={require('../../../assets/images/meal.png')}
          mainText={'2.5'}
          subText={'Kcal'}
          desc={'of 3 Kcal'}
        />

        <Detail
          image={require('../../../assets/images/glass.png')}
          mainText={'5'}
          subText={'Glass'}
          desc={'of 7 glass'}
        />

        <Text style={[styles.titleText, {fontSize: height * 0.0305, marginTop: '10%'}]}>
          Activity
        </Text>

        <Detail
          image={require('../../../assets/images/shoe.png')}
          mainText={'709'}
          subText={'Steps'}
          desc={'of >= 2500'}
        />

        <Text style={[styles.titleText, {fontSize: height * 0.0305}]}>
          Progress
        </Text>

        <View style={styles.progressView}>
          <ProgressBox
            image={require('../../../assets/images/notes.png')}
            mainText={'Notes'}
            desc={'Notes to your progress'}
          />
          <ProgressBox
            image={require('../../../assets/images/ketone.png')}
            mainText={'Ketone levels'}
            desc={'5 (0.5)+-'}
          />
        </View>

        <Detail
          image={require('../../../assets/images/weight.png')}
          mainText={'Weight'}
          subText={'Re-measures'}
          desc={'75 of 70 Kg'}
        />

        <View style={{height: height * 0.3, marginVertical: '5%'}}>
          <ImageBackground
            source={require('../../../assets/images/quiz.png')}
            resizeMode="contain"
            style={{
              height: '90%',
              width: '100%',
              justifyContent: 'flex-end',
              alignSelf: 'center',
            }}>
            <Text style={[styles.titleText, {fontSize: height * 0.0305}]}>
              Play Keto Quiz
            </Text>
          </ImageBackground>
          <Text style={[styles.infoText, {fontSize: height * 0.018}]}>
            Get to know the basics -{'>'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f9f7',
  },

  titleText: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
    textAlign: 'center',
  },

  progressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },

  infoText: {
    marginVertical: '3%',
    fontSize: 16,
    fontFamily: 'Ubuntu-Regular',
    color: '#50C878',
    textAlign: 'center',
  },
});
