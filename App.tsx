import { View } from 'react-native';
import RootStackNav from './src/navigator/RootStackNav';
import LoginScrn from './src/screens/LoginScrn';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
}
