import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../screens/LandingPage';
import LoginPage from '../screens/LoginPage';
import HeaderLeft from '../components/HeaderLeft';
import RegisterPage from '../screens/RegisterPage/RegisterPage';
import EmailPage from '../screens/RegisterPage/EmailPage';
import PasswordPage from '../screens/RegisterPage/PasswordPage';

const Stack = createStackNavigator();

export const AuthenticationStack = () => {
    return (
        <Stack.Navigator initialRouteName="LandingPage">
            <Stack.Screen
                name="LandingPage"
                component={LandingPage}
                options={{ headerShown: false, header: { borderBottomWidth: 0 } }}
            />
            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                options={({ navigation }) => ({
                    headerTitle: "",
                    headerLeft: () => (<HeaderLeft navigation={navigation} />)
                })}
            />
            <Stack.Screen
                name="RegisterPage"
                component={RegisterPage}
                options={({ navigation }) => ({
                    headerTitle: "",
                    headerStyle: { shadowColor: 'transparent' },
                    headerLeft: () => (<HeaderLeft navigation={navigation} />)
                })}
            />
            <Stack.Screen
                name="EmailPage"
                component={EmailPage}
                options={({ navigation }) => ({
                    headerTitle: "",
                    headerStyle: { shadowColor: 'transparent' },
                    headerLeft: () => (<HeaderLeft navigation={navigation} />)
                })}
            />
            <Stack.Screen
                name="PasswordPage"
                component={PasswordPage}
                options={({ navigation }) => ({
                    headerTitle: "",
                    headerStyle: { shadowColor: 'transparent' },
                    headerLeft: () => (<HeaderLeft navigation={navigation} />)
                })}
            />
        </Stack.Navigator>
    );
};