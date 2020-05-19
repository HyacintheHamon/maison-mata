import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from "../../constants";
import FastImage from 'react-native-fast-image';
const SwatchImg = require("../../assets/img/swatch.png")

export default class SwatchTestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onClicked: false,
            onSwatchClicked: false
        }
    }

    handlerButtonOnClick = () => {
        this.setState({
            onClicked: !this.state.onClicked
        });
    }

    handlerSwatchButtonOnClick = () => {
        this.setState({
            onSwatchClicked: !this.state.onSwatchClicked
        });
    }

    render() {

        var containerStyle;

        var swatchContainerStyle;

        if (this.state.onClicked == true) {
            // clicked button style
            containerStyle = {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#333',
                width: 26,
                height: 26,
                borderRadius: 13,
            }
        }
        else {
            // default button style
            containerStyle = {
                justifyContent: 'center',
                alignItems: 'center',
                width: 26,
                height: 26,
            }
        }

        if (this.state.onSwatchClicked == true) {
            // clicked button style
            swatchContainerStyle = {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#333',
                width: 26,
                height: 26,
                borderRadius: 13,
            }
        }
        else {
            // default button style
            swatchContainerStyle = {
                justifyContent: 'center',
                alignItems: 'center',
                width: 26,
                height: 26,
            }
        }

        return (
            <View style={{ flex: 1 }
            }>
                <View style={styles.defaultStyle}>
                    <Text style={styles.header}> Swatch color: </Text>
                    < TouchableOpacity style={containerStyle} onPress={this.handlerButtonOnClick} >
                        <View style={styles.outerCircle}>
                            <View style={styles.innerCircle} />
                            < /View>
                            < /TouchableOpacity>
                            < Text style={styles.header} > Swatch image: </Text>
                            < TouchableOpacity style={swatchContainerStyle} onPress={this.handlerSwatchButtonOnClick} >
                                <View style={styles.outerCircle}>
                                    <FastImage
                                        source={SwatchImg}
                                        style={styles.innerImg} />
                                </View>
                                < /TouchableOpacity>
    < /View>
    < /View >
        );
    }
}

const styles = StyleSheet.create({
                                    defaultStyle: {
                                    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF"
    },
    header: {
                                    fontSize: 12,
        color: theme.colors.black,
        marginTop: 20,
        marginBottom: 10
    },
    container: {
                                    justifyContent: 'center',
        alignItems: 'center',
    },
    containerSelected: {
                                    justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        width: 26,
        height: 26,
        borderRadius: 13,
    },
    outerCircle: {
                                    borderRadius: 12,
        width: 24,
        height: 24,
        backgroundColor: 'white',
    },
    innerCircle: {
                                    borderRadius: 10,
        width: 20,
        height: 20,
        margin: 2,
        backgroundColor: '#8E44AD'
    },
    innerImg: {
                                    borderRadius: 10,
        width: 20,
        height: 20,
        margin: 2
    }
})

