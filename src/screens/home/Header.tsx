import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

const Header = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/person.png')}
        />

        <View style={styles.bottomHalfBorder} />
      </View>

      <View style={styles.greetView}>
        <Text style={[styles.greetText, {fontSize: height * 0.026}]}>
          Hello!
        </Text>
        <Text style={[styles.descText, {fontSize: height * 0.0155}]}>
          View body transformation
        </Text>
      </View>
      <View style={styles.rightView}>
        <Image
          style={{width: '40%', height: '40%', resizeMode: 'contain'}}
          source={require('../../../assets/images/star.png')}
        />

        <View style={styles.circleView}>
          <Image
            style={{width: '40%', height: '40%', resizeMode: 'contain'}}
            source={require('../../../assets/images/question.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },

  imageView: {
    width: '19%',
    height: '80%',
    overflow: 'hidden',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  image: {
    width: '80%',
    height: '90%',
    resizeMode: 'contain',
  },

  bottomHalfBorder: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: '#50C878',
    backgroundColor: 'transparent',
  },

  greetView: {
    width: '50%',
    justifyContent: 'center',
    paddingLeft: '5%',
  },

  greetText: {
    fontFamily: 'Ubuntu-Bold',
    color: '#000',
  },

  descText: {
    textAlign: 'justify',
    fontFamily: 'Ubuntu-Regular',
    color: '#99A69D',
  },

  rightView: {
    width: '31%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  circleView: {
    width: '50%',
    height: '65%',
    backgroundColor: '#E4EDE7',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
