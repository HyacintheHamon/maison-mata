import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as  FaceDetector from 'expo-face-detector';

// Import the Mask component
import Mask from '../../components/Mask'

export default class GlassesTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            faces: []
        }
    }

    componentDidMount() {
        Permissions
            .askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission = ({ status }) => {
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    onFacesDetected = ({ faces }) => {
        this.setState({ faces })
    }

    onFacesDetectionError = (error) => {
        console.log(error)
    }

    render() {
        // Read faces by destructuring state
        const { faces, hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />
        }

        if (hasCameraPermission === false) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>No access to camera</Text>
                </View>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                <Camera
                    style={{ flex: 1 }}
                    type={Camera.Constants.Type.front}
                    faceDetectorSettings={{
                        mode: FaceDetector.Constants.Mode.fast,
                        detectLandmarks: FaceDetector.Constants.Landmarks.all,
                        runClassifications: FaceDetector.Constants.Classifications.all
                    }}
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