import { 
    StyleSheet
} from 'react-native'

export default StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center'
    },

    field: {
        marginTop: 30,
        flexDirection: 'row',

        height: 45,
        width: 300,

        borderRadius: 21,
        borderColor: 'black',
        borderWidth: 1,

        alignItems: 'center'
    },
    icon: {
        marginLeft: 10,
        width: 20,
        height: 20,
    },
    input: {
        flex: 1,
        margin: 2,
        borderRadius: 21
    },

    buttonBackground: {
        width: 200,
        height: 40,

        backgroundColor: '#1B1B1B',
        borderRadius: 21,

        marginTop: 30,

        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        lineHeight: 21,

    },

    forgotPassword: {
        fontSize: 12,
    },
    newUser: { 
        fontSize: 12,
        marginBottom: 210
    },
    footer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})