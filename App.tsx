import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from './src/navigation/Tab_Bar';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f6f9f7'} barStyle="dark-content" />
      <NavigationContainer>
        <TabBar />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
