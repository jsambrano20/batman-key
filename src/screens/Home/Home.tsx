import React from 'react';
import { StatusBar, View } from 'react-native';
import styles from './Styles';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatInputText';
import { BatButton } from '../../components/BatButton/BatButton';


export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>
            <View style={styles.inputContainer}>
                <BatButton />
            </View>
            <StatusBar barStyle={'light-content'}/>
        </View>
    )
};

