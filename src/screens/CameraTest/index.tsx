// This test is using Face detection with react-native-camera instead of expo-camera
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera';

// Import the Mask component
import Mask from '../../components/Mask'

export default class CameraTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            faces: []
        }
    }

    onFacesDetected = ({ faces }) => {
        this.setState({ faces })
    }

    onFacesDetectionError = (error) => {
        console.log(error)
    }

    render() {

        const { faces } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <RNCamera
                    style={{ flex: 1 }}
                    type={RNCamera.Constants.Type.front}
                    faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate}
                    faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
                    faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
                    onFacesDetected={this.onFacesDetected}
                    onFacesDetectionError={this.onFacesDetectionError}
                />
                {
                    // For each face draw the mask
                    faces.map(face => <Mask key={face.faceID} face={face} />)
                }
            </View>
        )
    }
}