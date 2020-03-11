import React from 'react';

import {
    View, 
    Image, 
    TextInput, 
    TouchableOpacity,
    Text
 } from 'react-native';

 import styles from './style'

const LoginForm = () => {
    return(
    <View style={styles.container}>
        <View style={styles.field}>
            <Image style={styles.icon} source={require('../../assets/icons/i_mail.png')}/>
            <TextInput style={styles.input}/>
        </View>
        <View style={styles.field}>
            <Image style={styles.icon} source={require('../../assets/icons/i_lock.png')}/>
            <TextInput style={styles.input}/>
        </View>
        <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>
                Entrar
            </Text>
        </TouchableOpacity>
        <View style={styles.footer}>
            <Text style={styles.forgotPassword}>
                    esqueci minha senha!
            </Text>
            <Text style={styles.newUser}>
                    Novo por aqui? Crie sua conta agora mesmo!
            </Text>
        </View>
    </View>
    )
};

export default LoginForm;
