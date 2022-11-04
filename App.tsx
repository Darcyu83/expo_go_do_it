import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import InlineTextButton from './src/components/InlineTextButton';
import { AppStyles } from './src/styles/appStyles';

const localImage = require('./assets/bg_coffee.jpg');

export default function App() {
  const [userNm, setUserNm] = useState('');
  const [userPw, setUserPw] = useState('');

  return (
    <ImageBackground source={localImage} style={AppStyles.container}>
      <View style={AppStyles.backgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        {/* 아이디 */}
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightText,
            AppStyles.lightTextInput,
          ]}
          value={userNm}
          onChangeText={setUserNm}
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
          <InlineTextButton title="Sign Up" onPress={() => {}} />
        </View>

        {/* Login 버튼 */}
        <Button title="Login" color={'#ffd966'} />
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}
