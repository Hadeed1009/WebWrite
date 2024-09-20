import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const CustomTabBarButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const TabBarIcon = ({
  iconName,
  focused,
  label,
}: {
  iconName: string;
  focused: boolean;
  label: string;
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <FontAwesome6
        name={iconName}
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
        {label}
      </Text>
    </View>
  );
};

export {CustomTabBarButton, TabBarIcon};
