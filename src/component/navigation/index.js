import React from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
const Stack = createStackNavigator();
const TransitionScreenOptions = {
  headerShown: false,
  ...TransitionPresets.RevealFromBottomAndroid,
};
const T = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#3333'}}>
      <Header />
      <List navigation={navigation} />
    </View>
  );
};
const Test = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#3333'}}>
      <Text>Оно работает!!!!!</Text>
    </View>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={T}
        options={TransitionScreenOptions}
      />
      <Stack.Screen
        name="Home1"
        component={Test}
        options={TransitionScreenOptions}
      />
    </Stack.Navigator>
  );
};

const Appication = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default Appication;
