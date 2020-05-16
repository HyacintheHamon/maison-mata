import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TryOnScreen extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.defaultStyle}>
					<Text>TRY ON</Text>
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
