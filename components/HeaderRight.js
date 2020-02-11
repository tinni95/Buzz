import React from "react"
import { TouchableOpacity } from "react-native"
import Colors from "../constants/Colors";
import { Light } from "../components/StyledText"

export default function HeaderRight({ onPress, text }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ paddingRight: 15 }}>
            <Light style={{ fontSize: 15, color: Colors.secondary }}>{text}</Light>
        </TouchableOpacity>
    )
}