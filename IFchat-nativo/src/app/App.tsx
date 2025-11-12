import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import Rotas from '../routes/Rotas';


export default function App() {
  return (
    <NavigationContainer>
      <Rotas/>
    </NavigationContainer>
  );
}

