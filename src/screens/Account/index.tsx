import React, { PureComponent } from "react";
import {
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	KeyboardAvoidingView,
	Dimensions
} from "react-native";

import FastImage from 'react-native-fast-image';

const LogoImage = require("../../assets/img/logo.png")
const { width } = Dimensions.get("window");

export default class AccountScreen extends PureComponent {

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<ScrollView contentContainerStyle={styles.container}>
					<View style={styles.logoWrap}>
						<FastImage
							source={LogoImage}
							style={styles.logo}
							resizeMode="contain"
						/>
					</View>
					<View style={styles.subContain}>
						<View style={styles.loginForm}>
							<View style={styles.inputWrap}>
								<TextInput
									keyboardType="email-address"
									returnKeyType="next"
									style={{ marginLeft: 20 }}
									placeholder="Username or email"
									value=""
								/>
							</View>
							<View style={styles.inputWrap}>
								<TextInput
									placeholder="Password"
									secureTextEntry
									style={{ marginLeft: 20 }}
									returnKeyType="go"
									value=""
								/>
							</View>
							<TouchableOpacity>
								<View style={styles.loginButton}>
									<Text style={styles.buttonText}>Login</Text>
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.separatorWrap}>
							<View style={styles.separator} />
							<Text style={styles.separatorText}>Or</Text>
							<View style={styles.separator} />
						</View>
						<TouchableOpacity>
							<View style={styles.signupButton}>
								<Text style={styles.buttonText}>Signup</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	logoWrap: {
		flexGrow: 0.55,
		alignItems: "center",
		justifyContent: "center"
	},
	logo: {
		width: 300,
		height: (width * 0.8) / 2
	},
	subContain: {
		paddingHorizontal: width * 0.1,
		paddingBottom: 50,
	},
	inputWrap: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		borderRadius: 5,
		height: 50,
		width: width / 1.25
	},
	separatorWrap: {
		paddingVertical: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	separator: {
		borderBottomWidth: 1,
		flexGrow: 1,
		borderColor: "gray",
	},
	separatorText: {
		color: "#333",
		paddingHorizontal: 10,
	},
	loginButton: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#28CE7A",
		backgroundColor: "#28CE7A",
		paddingHorizontal: 50,
		paddingVertical: 10,
		marginTop: 20
	},
	signupButton: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#28CE7A",
		backgroundColor: "#28CE7A",
		paddingHorizontal: 50,
		paddingVertical: 10,
	},
	buttonText: {
		color: "#FFFFFF",
		fontFamily: "Avenir",
		fontSize: 18,
		marginHorizontal: 40,
		textAlign: "center"
	}
});
