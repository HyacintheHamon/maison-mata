import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { theme, mocks } from "../../constants";
import { Block, Card } from "../../components";
import ColorPalette from '../../components/ColorPalette';
import FastImage from 'react-native-fast-image';
import { products } from 'src/constants/mocks';

export default class CatalogScreen extends Component {

	constructor() {
		super();
		this.state = {
			catalogActiveIndex: 0
		}
	}


	gotToProductDetail = () => {
		this.props.navigation.navigate('ProductDetail');
	}

	renderProduct(product, id) {
		return (
			<TouchableOpacity style={{ flex: 1 }} key={id} onPress={this.gotToProductDetail}>
				<Card shadow>
					<Block>
						<FastImage style={styles.productImg} key={id} source={product.imgSource} />
						<Text style={styles.productTitle} key={id}>{product.productTitle}</Text>
						<ColorPalette
							onChange={color => alert(`Color selected: ${color}`)}
							colors={product.colors}
							key={id}
						/>
					</Block>
				</Card>
			</TouchableOpacity>
		);
	};

	renderProducts = () => {
		return (
			<React.Fragment>
				{mocks.products.map(product => this.renderProduct(product, product.id))}
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
