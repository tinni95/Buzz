import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { isSmallDevice } from '../../constants/Layout';
import BuzzTextInput from '../../components/BuzzTextInput';
import HeaderRight from '../../components/HeaderRight';
import { validatePassword } from "../../utils/validators"

export default function PasswordPage({ navigation, route }) {
    const { user } = route.params;
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [rePasswordError, setRePasswordError] = useState("")

    let preinput = useRef();
    let input = useRef();

    useEffect(() => {
        preinput.current.focus()
    }, [])

    navigation.setOptions({
        headerRight: () => (
            <HeaderRight text={"Next"} onPress={() => login()} />
        )
    })

    const login = () => {
        if (!validatePassword(password)) {
            setPasswordError(true)
        }
        else {
            setPasswordError(false)
        }
        if (password != rePassword) {
            setRePasswordError(true)
        }
        else {
            setRePasswordError(false)
        }
        if (validatePassword(password) && password == rePassword) {
            console.log(user)
        }
    }

    return (
        <View style={styles.container}>
            <BuzzTextInput
                reference={preinput}
                label='Password'
                secureTextEntry={true}
                value={password}
                autoCapitalize="none"
                hintError={passwordError}
                hintText={"Invalid password"}
                placeholder={"password"}
                onChangeText={text => setPassword(text)}
                onSubmitEditing={() => input.current.focus()}
            />
            <BuzzTextInput
                reference={input}
                label='Repeat Password'
                value={rePassword}
                secureTextEntry={true}
                autoCapitalize="none"
                hintError={rePasswordError}
                hintText={"Password do not match"}
                placeholder={"password"}
                onChangeText={text => setRePassword(text)}
                onSubmitEditing={() => login()}
            />
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
