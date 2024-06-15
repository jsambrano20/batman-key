import React, { useState } from 'react';
import { Alert, Button, Pressable, Text, View } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatInputText';
import generatePass from '../../services/passGenerate';

import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message';

export function BatButton() {
    const [pass, setPass] = useState<string>('')

    function handleGeneratePass() {
        let passGenerate = generatePass()
        setPass(passGenerate)
    }

    function handleCopyPass() {
        if (pass) {
            Clipboard.setStringAsync(pass);
            Toast.show({
                type: 'success',
                text1: 'Senha copiada para área de transferência',
                visibilityTime: 2000,
                autoHide: true,
            });
        } else {
            Toast.show({
                type: 'error',
                text1: 'Nenhum texto para copiar!',
                visibilityTime: 2000,
                autoHide: true,
            });
        }
    }
    return (
        <>
            <BatTextInput pass={pass} />
            <Pressable onPress={() => {
                handleGeneratePass()
            }} style={styles.button}>
                <Text style={styles.text}>
                    GENERATE
                </Text>
            </Pressable>

            <Pressable onPress={() => {
                handleCopyPass()

            }} style={styles.button}>
                <Text style={styles.text}>
                    COPY
                </Text>
            </Pressable>
            <View style={styles.notification}>
                <Toast />
            </View>

        </>
    );
}