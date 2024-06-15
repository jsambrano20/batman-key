//rnbc

import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './BatLogoStyles';
import logo from '../../../assets/Batman-Logo.png';

export function BatLogo() {
    return (
        <View >
            <Text style={styles.title}>KEY BAT</Text>
            <Image source={logo} style={{ resizeMode: 'contain',
                height:180,
                width: 180
             }} />
        </View>
    );
} 
