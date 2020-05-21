import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { theme, mocks } from "../../constants";
import { Block, Card } from "../../components";
import ColorPalette from '../../components/ColorPalette';
import FastImage from 'react-native-fast-image';
import { StackNavigator } from "@react-navigation/stack";

export default class CatalogScreen extends Component {

	renderProduct(product) {
		return (
			<TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('ProductDetail')}>
				<Card shadow key={product.id}>
					<Block>
						<FastImage style={styles.productImg} source={product.imgSource} />
						<Text style={styles.productTitle}>{product.productTitle}</Text>
						<ColorPalette
							onChange={color => alert(`Color selected: ${color}`)}
							colors={product.colors}
						/>
					</Block>
				</Card>
			</TouchableOpacity>
		);
	};

	renderProducts = () => {
		return (
			<React.Fragment>
				{mocks.products.map(product => this.renderProduct(product))}
			</React.Fragment>
		);
	}

	render() {

		return (
			<ScrollView style={styles.catalogList} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
				{this.renderProducts()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	catalogList: {
		backgroundColor: "#FFFFFF",
		flex: 1
	},
	productImg: {
		width: 200,
		height: 120,
		alignSelf: "center"
	},
	productTitle: {
		fontSize: theme.sizes.h3,
		color: theme.colors.black,
		alignSelf: "center"
	}
})
