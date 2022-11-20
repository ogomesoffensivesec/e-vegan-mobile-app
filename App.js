import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './screens/InitialScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  }
  return (
    <NavigationContainer>
     <Stack.Navigator
     animation='slide_from_left'
     >
     
        <Stack.Screen
          name="Initial"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen      animation='slide_from_left'
 presentation='modal' name="Login" component={LoginScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}  options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;