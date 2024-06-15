import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'column',
        justifyContent:'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: 'gray'
    },
    inputContainer:{
        width:'80%',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default styles;