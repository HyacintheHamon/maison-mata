import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import DeviceInfo from 'react-native-device-info';
//import { usePowerState, useBatteryLevelIsLow } from 'react-native-device-info'

export default class DeviceInfoScreen extends Component {

    render() {

        let model = DeviceInfo.getModel();
        let uniqueId = DeviceInfo.getUniqueId();

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Device Information</Text>
                <Text style={styles.description}>Device Model: {model}</Text>
                <Text style={styles.description}>Device ID: {uniqueId}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignContent: "center",
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20
    },
    description: {
        fontSize: 14,
        textAlign: "center"
    }
});