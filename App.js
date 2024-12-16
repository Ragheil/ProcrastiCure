import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calendar from './Pages/Calendar';  // Import your Calendar.js
// Import other screens here
// import LoginPage from './LoginPage';  
// import RegistrationPage from './RegistrationPage'; 
// import AccountRecoveryPage from './AccountRecoveryPage'; 

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Login" component={LoginPage} /> 
            <Stack.Screen name="Registration" component={RegistrationPage} /> 
            <Stack.Screen name="AccountRecovery" component={AccountRecoveryPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
