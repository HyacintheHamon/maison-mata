import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class CartScreen extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.defaultStyle}>
					<Text>CART</Text>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	defaultStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
