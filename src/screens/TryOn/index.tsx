import React from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { theme, mocks } from "../../constants";
import ColorPalette from '../../components/ColorPalette';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get("window");

let CAMERA_VIEW_HEIGHT = height / 2;
let CAMERA_VIEW_WIDTH = width;
let SLIDER_WIDTH = width;
let ITEM_WIDTH = 200;

export default class TryOnScreen extends React.Component {

	state: {
		activeIndex: 0
	}

	renderItem = ({ item, index }) => {
		return (
			<View style={styles.slide}>
				<Image style={styles.productImg} source={item.imgSource} />
			</View>
		);
	}

	render() {

		return (
			<View style={{ flex: 1 }}>
				<View style={styles.topView}>
					<RNCamera
						style={styles.preview}
					>
						<View style={styles.captureContainer}>
							<TouchableOpacity style={styles.capture}>
								<Text>Take Photo</Text>
							</TouchableOpacity>
						</View>
					</RNCamera>
				</View>
				<View style={styles.bottomView}>
					<Text style={styles.productTitle}>Allure</Text>
					<View style={styles.carousel}>
						<Carousel
							ref={(c) => { this._carousel = c; }}
							data={mocks.products}
							renderItem={this.renderItem}
							sliderWidth={SLIDER_WIDTH}
							itemWidth={ITEM_WIDTH}
							loop={true}
							onSnapToItem={index => this.setState({ activeIndex: index })}
						/>
					</View>
					<ColorPalette
						onChange={color => alert(`Color selected: ${color}`)}
						defaultColor={'#C0392B'}
						colors={['#f9ca24', '#f0932b', '#eb4d4b', '#8E44AD', '#6ab04c', '#e056fd', '#4834d4']}
					/>
					<TouchableOpacity>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Add to Cart</Text>
							<Text style={styles.buttonTextDescription}>$95.00</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	topView: {
		flex: 1,
	},
	bottomView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	preview: {
		height: CAMERA_VIEW_HEIGHT,
		width: CAMERA_VIEW_WIDTH
	},
	captureContainer: {

	},
	capture: {

	},
	carousel: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	slide: {
		backgroundColor: 'transparent',
		// backgroundColor: 'floralwhite',
		borderRadius: 5,
		height: 80,
		marginBottom: 10
	},
	productTitle: {
		fontSize: theme.sizes.h2,
		color: theme.colors.black,
		alignSelf: "center",
		marginTop: 70,
		marginBottom: 10
	},
	productImg: {
		width: 120,
		height: 80,
		alignSelf: "center",
		marginBottom: 10
	},
	button: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#27ae60",
		backgroundColor: "#27ae60",
		paddingHorizontal: 50,
		paddingVertical: 10,
		marginTop: 10
	},
	buttonText: {
		color: "#FFFFFF",
		fontFamily: "Avenir",
		fontSize: 18,
		fontWeight: "bold",
		marginHorizontal: 40,
		textAlign: "center"
	},
	buttonTextDescription: {
		color: theme.colors.gray3,
		fontFamily: "Avenir",
		fontSize: theme.sizes.description,
		marginHorizontal: 40,
		textAlign: "center"
	}
})
