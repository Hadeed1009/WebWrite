import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

type detailsProps = {
  image: number;
  mainText: string;
  subText: string;
  desc: string;
};
const Detail: React.FC<detailsProps> = ({image, mainText, subText, desc}) => {
  const {height, width} = useWindowDimensions();

  const isWeight = mainText === 'Weight';
  const isGlass = subText === 'Glass';

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
        <Text style={[styles.mainText, isWeight && {fontSize: 20}]}>
          {mainText}
        </Text>
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

      {isGlass && (
        <>
          <View style={styles.glassView}>
            <FontAwesome6 name="gear" size={20} color="#99A69D" solid />
            <Text style={styles.descText}>Measure Method</Text>
          </View>

          <View style={styles.bigCircle}>
            <View style={[styles.circlesView, {backgroundColor: '#dcf4e4'}]}>
              <FontAwesome6 name="plus" size={20} color="green" solid />
            </View>
          </View>
          <View style={styles.smallCircle}>
            <View style={[styles.circlesView, {backgroundColor: '#fbdddd'}]}>
              <FontAwesome6 name="minus" size={16} color="red" solid />
            </View>
          </View>
        </>
      )}
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
    borderWidth: 1,
    borderColor: '#E4EDE7',
    paddingHorizontal: '3%',
    position: 'relative',
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

  glassView: {
    height: '20%',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    bottom: -20,
    left: '40%',
    transform: [{translateX: -50}],
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomWidth: 1,
    borderColor: '#E4EDE7',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  circlesView: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    height: '80%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  bigCircle: {
    position: 'absolute',
    bottom: -35,
    right: 10,
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderBottomWidth: 1,
    borderColor: '#E4EDE7',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  smallCircle: {
    position: 'absolute',
    bottom: -30,
    right: 65,
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderBottomWidth: 1,
    borderColor: '#E4EDE7',
    borderLeftWidth: 1,
  },
});
