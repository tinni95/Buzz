import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { isSmallDevice } from '../../constants/Layout';
import BuzzTextInput from '../../components/BuzzTextInput';
import HeaderRight from '../../components/HeaderRight';

export default function RegisterPage({ navigation }) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [nameError, setNameError] = useState(false)
    const [surnameError, setSurnameError] = useState("")

    let input = useRef();
    navigation.setOptions({
        headerRight: () => (
            <HeaderRight text={"Next"} onPress={() => login()} />
        )
    })

    const login = () => {
        if (name.length == 0) {
            setNameError(true)
        }
        else {
            setNameError(false)
        }
        if (surname.length == 0) {
            setSurnameError(true)
        }
        else {
            setSurnameError(false)
        }
        if (name.length > 0 && surname.length > 0) {
            navigation.push("EmailPage")
        }
    }

    return (
        <View style={styles.container}>
            <BuzzTextInput
                label='first name'
                value={name}
                hintError={nameError}
                hintText={"Empty field"}
                placeholder={"first name"}
                onChangeText={text => setName(text)}
                onSubmitEditing={() => input.current.focus()}
            />
            <BuzzTextInput
                reference={input}
                label='last name'
                value={surname}
                hintError={surnameError}
                hintText={"Empty field"}
                placeholder={"last name"}
                onChangeText={text => setSurname(text)}
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
