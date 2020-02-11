import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
export async function loadResourcesAsync() {
    await Promise.all([
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            'Avenir': require('./assets/fonts/avenir.otf'),
            'sequel-sans': require('./assets/fonts/SequelSans-Body.ttf'),
            'sequel-sans-bold': require('./assets/fonts/SequelSans-Bold.ttf'),
            'sequel-sans-light': require('./assets/fonts/SequelSans-Body-light.ttf')
        }),
    ]);
}

export function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

export function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}
