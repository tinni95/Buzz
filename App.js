import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { loadResourcesAsync, handleLoadingError, handleFinishLoading } from './LoadAppHelpers';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationStack } from './navigation/AuthenticationStack';
import Colors from './constants/Colors';

export default function App() {
  const [loggedin, setLoggedin] = useState(false)
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      accent: Colors.secondary
    },
  };


  function login() {
    setLoggedin(true)
  }

  function logout() {
    setLoggedin(false)
  }

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthenticationStack></AuthenticationStack>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
