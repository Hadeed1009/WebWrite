import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home, Meal, Profile, Shopping} from '../screens';
import {Text, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'house-chimney';
          } else if (route.name === 'Meal') {
            iconName = 'utensils';
          } else if (route.name === 'Shopping') {
            iconName = 'basket-shopping';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome6
                name={iconName ?? ''}
                size={24}
                color={focused ? '#50C878' : '#E4EDE7'}
                solid
              />

              <Text
                style={{
                  color: focused ? '#50C878' : '#99A69D',
                  marginLeft: 8,
                  fontSize: 14,
                }}>
                {route.name}
              </Text>
            </View>
          );
        },

        tabBarActiveTintColor: '#50C878',
        tabBarInactiveTintColor: '#E4EDE7',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Meal" component={Meal} />
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabBar;
