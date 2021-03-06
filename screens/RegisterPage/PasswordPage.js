import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { isSmallDevice } from '../../constants/Layout';
import BuzzTextInput from '../../components/BuzzTextInput';
import HeaderRight from '../../components/HeaderRight';
import { validatePassword } from "../../utils/validators"
import { Ionicons } from "@expo/vector-icons";

export default function PasswordPage({ navigation, route }) {
    const { user } = route.params;
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [rePasswordError, setRePasswordError] = useState("")
    const [passHidden, setPassHidden] = useState(true)
    const [repassHidden, setRePassHidden] = useState(true)
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
            <View >
                <BuzzTextInput
                    reference={preinput}
                    label='Password'
                    secureTextEntry={passHidden}
                    value={password}
                    autoCapitalize="none"
                    hintError={passwordError}
                    hintText={"Invalid password"}
                    placeholder={"password"}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={() => input.current.focus()}
                />
                <TouchableOpacity onPress={() => setPassHidden(!passHidden)} style={styles.wrapper}>
                    <Ionicons
                        name={"ios-eye"}
                        size={25}
                        style={{ padding: 5 }}
                        color={"black"}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <BuzzTextInput
                    reference={input}
                    label='Repeat Password'
                    value={rePassword}
                    secureTextEntry={repassHidden}
                    autoCapitalize="none"
                    hintError={rePasswordError}
                    hintText={"Password do not match"}
                    placeholder={"password"}
                    onChangeText={text => setRePassword(text)}
                    onSubmitEditing={() => login()}
                />
                <TouchableOpacity onPress={() => setRePassHidden(!repassHidden)} style={styles.wrapper}>
                    <Ionicons
                        name={"ios-eye"}
                        size={25}
                        style={{ padding: 5 }}
                        color={"black"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        alignSelf: "center",
        right: 25,
        top: 15
    },
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
