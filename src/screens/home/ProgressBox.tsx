import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

type ProgressBoxProps = {
  image: number;
  mainText: string;
  desc: string;
};
const ProgressBox: React.FC<ProgressBoxProps> = ({image, mainText, desc}) => {
  const {height, width} = useWindowDimensions();

  return (
    <View
      style={[styles.container, {height: height * 0.2, width: width * 0.42}]}>
      <Image
        source={image}
        style={{height: '30%', width: '40%', resizeMode: 'contain'}}
      />
      <Text style={[styles.mainText]}>{mainText}</Text>
      <Text style={[styles.descText]}>{desc}</Text>
    </View>
  );
};

export default ProgressBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginVertical: '3%',
    elevation: 5,
  },

  mainText: {
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    color: '#0D2114',
    paddingTop: '3%',
  },
  
  descText: {
    fontSize: 12,
    fontFamily: 'Ubuntu-SemiBold',
    color: '#99A69D',
    paddingTop: '3%',
  },
});
