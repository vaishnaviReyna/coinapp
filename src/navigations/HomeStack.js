import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Chart from '../screens/chartscreen';
import Dashbord from '../screens/dashbordScreen';
import Login from '../screens/loginScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Markets" component={Dashbord} />  
      <Stack.Screen name="chart_screen" component={Chart} />  
      <Stack.Screen name="login_screen" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
