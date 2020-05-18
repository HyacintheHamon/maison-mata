import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from "../../constants";

const cartImg = require("../../assets/img/cart.png")

export default class CartScreen extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.defaultStyle}>
					<Image
						style={styles.cartImg}
						source={cartImg}
					/>
					<Text style={styles.header}>It's pretty lonely in here</Text>
					<Text style={styles.description}>Get some new cool frames in seconds!</Text>
					<TouchableOpacity>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Try On Now!</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View >
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
		fontSize: theme.sizes.h2,
		color: theme.colors.black
	},
	description: {
		fontSize: theme.sizes.description,
		color: theme.colors.gray,
		marginTop: 10
	},
	button: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#28CE7A",
		backgroundColor: "#28CE7A",
		paddingHorizontal: 50,
		paddingVertical: 10,
		marginTop: 20
	},
	buttonText: {
		color: "#FFFFFF",
		fontFamily: "Avenir",
		fontSize: 18,
		marginHorizontal: 40,
		textAlign: "center"
	},
	cartImg: {
		width: 60,
		height: 60,
		alignSelf: "center",
		marginBottom: 20
	},
})

