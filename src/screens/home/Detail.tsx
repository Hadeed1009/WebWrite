import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

type detailsProps = {
  image: number;
  mainText: string;
  subText: string;
  desc: string;
};
const Detail: React.FC<detailsProps> = ({image, mainText, subText, desc}) => {
  const {height, width} = useWindowDimensions();

  const isWeight = mainText === 'Weight';

  return (
    <View
      style={[styles.container, {height: height * 0.17, width: width * 0.9}]}>
      <View style={styles.imageView}>
        <Image
          source={image}
          style={{height: '60%', width: '60%', resizeMode: 'contain'}}
        />
      </View>
      <View
        style={[
          styles.mainTextView,
          isWeight && {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          },
        ]}>
        <Text style={[styles.mainText,
          isWeight && {fontSize: 20},
        ]}>{mainText}</Text>
        <Text
          style={[
            styles.subText,
            isWeight && {color: '#99A69D', marginTop: '0%'},
          ]}>
          {subText}
        </Text>
      </View>
      <View style={styles.imageView}>
        <Text style={[styles.descText, isWeight && {color: '#0D2114'}]}>
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    marginVertical: '3%',
    elevation: 5,
    paddingHorizontal: '3%',
  },

  imageView: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainTextView: {
    height: '100%',
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  mainText: {
    fontSize: 40,
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
  },

  subText: {
    fontSize: 14,
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
    marginTop: '10%',
  },

  descText: {
    fontSize: 14,
    fontFamily: 'Ubuntu-SemiBold',
    color: '#99A69D',
  },
});
