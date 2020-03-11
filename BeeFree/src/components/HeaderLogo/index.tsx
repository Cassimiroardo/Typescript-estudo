import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';



const index = () => {
  return (
    <>
      <Image style={styles.logo}
      source={require('../../assets/logo.png')}/>
    </>
  );
};

const styles = StyleSheet.create({
    logo: {
        marginTop: 70,
        width:140 , height: 140
    }
  });

export default index;