import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView
} from 'react-native';
import ColorPalette from '../../components/ColorPalette';
import { theme, mocks } from "../../constants";

var StoreGlobal = require('../../stores/');

export default class ProductDetail extends Component {

    constructor(props) {
        super(props);
    }

    cartButtonClicked() {
        Alert.alert("Success", "Product has beed added to cart")
    }

    render() {
        return (

            <View style={styles.container}>
                {
                    mocks.products.filter(product => product.id === 1)
                        .map(product =>
                            <ScrollView>
                                <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                                    <Image style={styles.productImg} source={product.imgSource} />
                                    <Text style={styles.name}>{product.productTitle}</Text>
                                    <Text style={styles.price}>{product.price}</Text>
                                    <Text style={styles.description}>{product.description}</Text>
                                </View>
                                <ColorPalette
                                    onChange={color => alert(`Color selected: ${color}`)}
                                    colors={mocks.products[0].colors}
                                    style={styles.ColorPalette}
                                />
                                <View style={styles.addToCartContainer}>
                                    <TouchableOpacity style={styles.cartButton} onPress={() => this.cartButtonClicked()}>
                                        <Text style={styles.cartButtonText}>Add To Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    productImg: {
        width: 200,
        height: 200,
    },
    name: {
        fontSize: theme.sizes.h3,
        color: theme.colors.black,
        alignSelf: "center",
        marginBottom: 10
    },
    price: {
        fontSize: theme.sizes.description,
        color: theme.colors.black,
        alignSelf: "center"
    },
    description: {
        textAlign: 'center',
        marginTop: 10,
        color: "#696969",
        marginBottom: 10
    },
    ColorPalette: {
        marginBottom: 20
    },
    addToCartContainer: {
        marginHorizontal: 30
    },
    cartButton: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#28CE7A",
        backgroundColor: "#28CE7A",
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginTop: 10
    },
    cartButtonText: {
        color: "#FFFFFF",
        fontFamily: "Avenir",
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 40,
        textAlign: "center"
    }
});     