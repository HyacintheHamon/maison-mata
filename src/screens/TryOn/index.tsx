import React from 'react';
import { Text, ScrollView, View, TouchableOpacity, StyleSheet, Dimensions, NativeModules } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { theme, mocks } from "../../constants";
import ColorPalette from '../../components/ColorPalette';
import Carousel from 'react-native-snap-carousel';
import { ViroARSceneNavigator } from 'react-viro';
import HelloWorldSceneAR from '../HelloWorldSceneAR'
import { G } from 'react-native-svg';
import GlassesTest from '../GlassesTest';
import FaceDetection from '../FaceDetection';
import FastImage from 'react-native-fast-image';
import { products } from 'src/constants/mocks';
import ARKitScreen from '../ARKit'

var StoreGlobal = require('../../stores/');

const { width, height } = Dimensions.get("window");

let CAMERA_VIEW_HEIGHT = height / 2;
let CAMERA_VIEW_WIDTH = width;
let SLIDER_WIDTH = width;
let ITEM_WIDTH = 200;

const Greeter = NativeModules.Greeter;

export default class TryOnScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			viroAppProps: { displayObject: false, yOffset: 0, _onLoadEnd: this._onLoadEnd, _onLoadStart: this._onLoadStart, _onTrackingInit: this._onTrackingInit },
			trackingInitialized: false,
			isLoading: false,
			activeIndex: 0
		}
	}

	componentDidMount() {
		console.log("Hello!");
		Greeter.greet('Hyacinthe');
	}


	renderItem = ({ item, index }) => {
		return (
			<View style={styles.slide}>
				<FastImage style={styles.productImg} key={index} source={item.imgSource} />
			</View>
		);
	}

	onSnapItem = (index) => {
		this.setState({ activeIndex: index });
		StoreGlobal.activeIndex = index;
	}

	render() {

		const { activeIndex } = this.state;

		console.log('active index: ', activeIndex);

		return (
			<View style={{ flex: 1 }}>
				{/* Regular Camera View */}
				{/* <View style={styles.topView}>
					<RNCamera
						style={styles.preview}
					>
						<View style={styles.captureContainer}>
							<TouchableOpacity style={styles.capture}>
								<Text>Take Photo</Text>
							</TouchableOpacity>
						</View>
					</RNCamera>
		          </View> */}
				{/* Viro React View */}
				{/* <View style={styles.topView}>
					<ViroARSceneNavigator style={styles.arView} apiKey="48F904D3-E6A6-4D2F-B66A-FFBEC0CA4B69"
						initialScene={{ scene: HelloWorldSceneAR, passProps: { displayObject: this.state.displayObject } }} viroAppProps={this.state.viroAppProps}
					/>
				</View> */}
				{/* Expo AR View */}
				{/* Expo Face Detection View */}
				{/* <View style={styles.topView}>
					<FaceDetection />
			     </View> */}
				<View style={styles.topView}>
					<ARKitScreen />
				</View>
				<View style={styles.bottomView}>
					<View style={styles.productTitleView}>
						{
							mocks.products.filter(product => product.id === activeIndex)
								.map(product =>
									<Text style={styles.productTitle} key={activeIndex}>{product.productTitle}</Text>
								)
						}
					</View>
					<View style={styles.carousel}>
						<Carousel
							ref={(c) => { this._carousel = c; }}
							data={mocks.products}
							renderItem={this.renderItem}
							sliderWidth={SLIDER_WIDTH}
							itemWidth={ITEM_WIDTH}
							loop={true}
							onSnapToItem={index => this.onSnapItem(index)}
						/>
					</View>
					{
						mocks.products.filter(product => product.id === activeIndex)
							.map(product =>
								<ColorPalette
									onChange={color => alert(`Color selected: ${color}`)}
									defaultColor={'#C0392B'}
									key={activeIndex}
									colors={product.colors}
								/>
							)
					}
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
	productTitleView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	productTitle: {
		fontSize: theme.sizes.h3,
		color: theme.colors.black,
		alignSelf: "center",
		marginLeft: 10,
		marginRight: 10
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
		borderColor: "#28CE7A",
		backgroundColor: "#28CE7A",
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
	},
	arView: {
		flex: 1
	}
})
