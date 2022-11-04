import React, { useState } from 'react';
import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import InlineTextButton from '../components/InlineTextButton';
import { AppStyles } from '../styles/appStyles';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/types';

interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const SignUpScrn = ({ navigation }: IProps) => {
  const [email, setEmail] = useState('');
  const [userPw, setUserPw] = useState('');
  const [confirmUserPw, setConfirmUserPw] = useState('');
  const [validationMsg, setValidationMsg] = useState('');

  const validateInfo = (
    value: string,
    valueToCompare: string,
    setValue: (value: string) => void
  ) => {
    if (value !== valueToCompare) {
      setValidationMsg('Passwords does not match.');
      setValue(value);
    } else {
      setValidationMsg('');
      setValue(value);
    }
  };
  return (
    <ImageBackground
      style={[AppStyles.container]}
      source={require('../../assets/bg_coffee.jpg')}
    >
      <KeyboardAvoidingView
        style={[AppStyles.backgroundCover]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* title */}
        <Text style={[AppStyles.lightText, AppStyles.header]}>Sign Up</Text>

        {/* info validation message  */}
        <Text style={[AppStyles.errText]}>{validationMsg}</Text>
        {/* 아이디 */}
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightText,
            AppStyles.lightTextInput,
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
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
          onChangeText={(pw) => {
            validateInfo(pw, confirmUserPw, setUserPw);
          }}
          placeholder="Password"
          placeholderTextColor={'#bebebe'}
          secureTextEntry
        />

        {/* 비밀번호 확인 */}
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightText,
            AppStyles.lightTextInput,
          ]}
          value={confirmUserPw}
          onChangeText={(pw) => {
            validateInfo(pw, userPw, setConfirmUserPw);
          }}
          placeholder="Confirm Password"
          placeholderTextColor={'#bebebe'}
          secureTextEntry
        />

        {/* Login 버튼 */}
        <View style={[AppStyles.rowContainer]}>
          <Text style={[AppStyles.lightText]}>Already have an account? </Text>
          <InlineTextButton
            title="Login"
            onPress={() => {
              navigation.popToTop();
            }}
          />
        </View>

        {/* Sign up 버튼 */}
        <Button title="Sign Up" color={'#ffd966'} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignUpScrn;
