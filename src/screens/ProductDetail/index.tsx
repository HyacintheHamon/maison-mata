import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProductDetail extends Component {

    render() {

        return (
            <View style={styles.productView}>
                <Text>Product detail view</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    productView: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
