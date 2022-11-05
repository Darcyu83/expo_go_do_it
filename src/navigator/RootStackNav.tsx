import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import LoginScrn from '../screens/LoginScrn';
import ResetPwScrn from '../screens/ResetPwScrn';
import SignUpScrn from '../screens/SignUpScrn';
import { RootStackParamList } from './types';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from '../../firebaseConfig';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

interface IProps {}
const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStackNav = ({}: IProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScrn"
        component={LoginScrn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScrn"
        component={SignUpScrn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPwScrn"
        component={ResetPwScrn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNav;
