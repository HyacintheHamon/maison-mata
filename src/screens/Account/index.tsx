import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AccountScreen extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.defaultStyle}>
					<Text>ACCOUNT</Text>
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

