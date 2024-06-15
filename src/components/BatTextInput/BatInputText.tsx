//rnbc

import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatInputTextStyles';

interface BatTextInputProps {
    pass: string;
}

export function BatTextInput(props: BatTextInputProps) {
    return (
        <TextInput
            style={styles.inputer}
            multiline
            placeholder='Pass'
            value={props.pass}
            editable={false} // Adicionado para impedir que o teclado abra
        />);
}
