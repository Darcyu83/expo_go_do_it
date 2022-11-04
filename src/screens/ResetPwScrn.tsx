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

const ResetPwScrn = ({ navigation }: IProps) => {
  const [email, setEmail] = useState('');
  const [validationMsg, setValidationMsg] = useState('');
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
        <Text style={[AppStyles.lightText, AppStyles.header]}>
          Rest Passwrord
        </Text>

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

        {/* Reset 버튼 */}
        <Button title="Reset Password" color={'#ffd966'} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ResetPwScrn;
