import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../screens/LandingPage';
import LoginPage from '../screens/LoginPage';
import HeaderLeft from '../components/HeaderLeft';
import RegisterPage from '../screens/RegisterPage';

const Stack = createStackNavigator();

export const AuthenticationStack = () => {
    return (
        <Stack.Navigator initialRouteName="LandingPage">
            <Stack.Screen
                name="LandingPage"
                component={LandingPage}
                options={{ headerShown: false }}
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
                    headerLeft: () => (<HeaderLeft navigation={navigation} />)
                })}
            />
        </Stack.Navigator>
    );
};