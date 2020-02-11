import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Light } from '../components/StyledText';
import Colors from '../constants/Colors';
import { isSmallDevice } from '../constants/Layout';
import BuzzTextInput from '../components/BuzzTextInput';
import HeaderRight from '../components/HeaderRight';

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let input = useRef();
    navigation.setOptions({
        headerRight: () => (
            <HeaderRight text={"Next"} onPress={() => login()} />
        )
    })

    const login = () => {
        alert("login")
    }

    return (
        <View style={styles.container}>
            <BuzzTextInput
                label='Email'
                value={email}
                placeholder={"email"}
                onChangeText={text => setEmail(text)}
                onSubmitEditing={() => input.current.focus()}
            />
            <BuzzTextInput
                reference={input}
                label='Password'
                value={password}
                placeholder={"password"}
                onChangeText={text => setPassword(text)}
                onSubmitEditing={() => login()}
            />
            <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: 15 }}>
                <Light style={{ color: Colors.secondary }}>Reset Password</Light>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20
    },
    formContainer: {
        margin: 30,
        marginTop: isSmallDevice ? 20 : 40,
        justifyContent: 'center'
    },
    buttonsContainer: {
        flex: isSmallDevice ? 10 : 7.5,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    spacer: { height: 20 }
});
