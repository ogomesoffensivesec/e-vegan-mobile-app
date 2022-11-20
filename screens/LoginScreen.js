import React from 'react'
import { Button, Text, View , StyleSheet} from 'react-native'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Button title='Back' onPress={() => { navigation.navigate('Initial') }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default LoginScreen
    