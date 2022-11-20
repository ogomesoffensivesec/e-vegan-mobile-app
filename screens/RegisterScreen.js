import React from 'react'
import { Button, Text, View , StyleSheet} from 'react-native'

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>RegisterScreen</Text>
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
export default RegisterScreen
    