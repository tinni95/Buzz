import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import RoundButton from '../components/RoundButton';
import Colors from '../constants/Colors';
import { Light } from '../components/StyledText';

export default LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images.jpg/Buzz_landing_page.png')}
                    resizeMode="contain"
                />
                <Light style={styles.heading}>The real life social</Light>
            </View>
            <View style={styles.buttonsWrapper}>
                <RoundButton
                    isMedium
                    textColor={Colors.primary}
                    color={Colors.primary}
                    onPress={() => { }}
                    text="Iscriviti"
                />
                <View style={{ height: 20 }}></View>
                <RoundButton
                    isMedium
                    textColor={Colors.secondary}
                    color={"white"}
                    onPress={() => { navigation.push('LoginPage') }}
                    text="Accedi"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 10
    },
    logo: {
        alignItems: 'center',
        width: 200,
    },
    heading: {
        fontSize: 18,
        justifyContent: "flex-start",
        alignItems: 'flex-start'
    },
    buttonsWrapper: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

});
