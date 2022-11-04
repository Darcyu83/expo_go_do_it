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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbVK5hAtkOH9vPcZcsHgoXuZW6oBe5s6I',
  authDomain: 'go-do-it-cbe53.firebaseapp.com',
  projectId: 'go-do-it-cbe53',
  storageBucket: 'go-do-it-cbe53.appspot.com',
  messagingSenderId: '147219272699',
  appId: '1:147219272699:web:a076e95c9f8b19a557715e',
  measurementId: 'G-RY33TX9KX7',
};

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
