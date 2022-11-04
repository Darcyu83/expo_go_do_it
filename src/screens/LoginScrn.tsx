import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import InlineTextButton from '../components/InlineTextButton';
import { AppStyles } from '../styles/appStyles';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/types';

const localImage = require('../../assets/bg_coffee.jpg');

export default function LoginScrn({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}) {
  const [email, setEmail] = useState('');
  const [userPw, setUserPw] = useState('');

  return (
    <ImageBackground source={localImage} style={AppStyles.container}>
      {/* 키보드 */}
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={60}
      >
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        {/* 아이디 */}
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightText,
            AppStyles.lightTextInput,
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="Username"
          placeholderTextColor={'#bebebe'}
        />

        {/* 비밀번호 */}
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightText,
            AppStyles.lightTextInput,
          ]}
          value={userPw}
          onChangeText={setUserPw}
          placeholder="Password"
          placeholderTextColor={'#bebebe'}
          secureTextEntry
        />

        {/* Sign Up 버튼 */}
        <View style={[AppStyles.rowContainer]}>
          <Text style={[AppStyles.lightText]}>Don't have an account? </Text>
          <InlineTextButton
            title="Sign Up"
            onPress={() => {
              navigation.navigate('SignUpScrn');
            }}
          />
        </View>

        {/* Forgotten password 버튼 */}
        <View style={[AppStyles.rowContainer]}>
          <Text style={[AppStyles.lightText]}>Forgotten your password? </Text>
          <InlineTextButton
            title="Reset"
            onPress={() => {
              navigation.navigate('ResetPwScrn');
            }}
          />
        </View>

        {/* Login 버튼 */}
        <Button title="Login" color={'#ffd966'} />
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}
