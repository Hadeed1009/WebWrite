import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home, Meal, Profile, Shopping} from '../screens';
import {
  CustomTabBarButton,
  TabBarIcon,
} from '../components/Custom_TabBar_Button';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarButton: props => (
          <CustomTabBarButton {...props} onPress={() => {}} />
        ),
        tabBarIcon: ({focused}) => {
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
            <TabBarIcon
              iconName={iconName || ''}
              focused={focused}
              label={route.name}
            />
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
