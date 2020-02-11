
import React from 'react';
import { TextInput } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View } from 'react-native';

export default function BuzzTextInput(props) {
    return (<View>
        <TextInput
            {...props}
            ref={props.reference}
            style={{ backgroundColor: "white" }}
            selectionColor={Colors.primary}
            underlineColor={"white"}
        />
        <View style={{ marginTop: -2, backgroundColor: "white", borderTopColor: "white", borderTopWidth: 10 }} />
    </View>)
}