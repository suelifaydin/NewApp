import React from 'react';
import MainNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import './src/localization/i18n';


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
