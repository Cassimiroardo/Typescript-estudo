import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import HeaderLogo from './components/HeaderLogo'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <View style={styles.container}>
      <HeaderLogo />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5B717'
  }
});

export default App;
