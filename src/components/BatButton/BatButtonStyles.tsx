import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        marginTop: 5,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#E5BF3C'
    },
    notification: {
        backgroundColor: '#000', // cor de fundo preta
                color: '#ff9900', // cor do texto laranja
    }
});