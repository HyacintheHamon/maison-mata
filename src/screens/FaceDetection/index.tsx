import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as  FaceDetector from 'expo-face-detector';
import { DeviceMotion } from 'expo-sensors';

export default class FaceDetection extends React.Component {
    static defaultProps = {
        countDownSeconds: 5,
        motionInterval: 500, //ms between each device motion reading
        motionTolerance: 1, //allowed variance in acceleration
        cameraType: Camera.Constants.Type.front, //front vs rear facing camera
    }

    state = {
        hasCameraPermission: null,
        faceDetecting: false, //when true, we look for faces
        faceDetected: false, //when true, we've found a face
        countDownSeconds: 5, //current available seconds before photo is taken
        countDownStarted: false, //starts when face detected
        pictureTaken: false, //true when photo has been taken
        motion: null, //captures the device motion object 
        detectMotion: false, //when true we attempt to determine if device is still
    };

    countDownTimer = null;

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    componentDidMount() {
        this.motionListener = DeviceMotion.addListener(this.onDeviceMotion);
        setTimeout(() => { //MH - tempm - wait 5 seconds for now before detecting motion
            this.detectMotion(true);
        }, 5000);
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.detectMotion && nextState.motion && this.state.motion) {
            if (
                Math.abs(nextState.motion.x - this.state.motion.x) < this.props.motionTolerance
                && Math.abs(nextState.motion.y - this.state.motion.y) < this.props.motionTolerance
                && Math.abs(nextState.motion.z - this.state.motion.z) < this.props.motionTolerance
            ) {
                //still
                this.detectFaces(true);
                this.detectMotion(false);
            } else {
                //moving
            }
        }

    }

    detectMotion = (doDetect) => {
        this.setState({
            detectMotion: doDetect,
        });

        if (doDetect) {
            DeviceMotion.setUpdateInterval(this.props.motionInterval);
        } else if (!doDetect && this.state.faceDetecting) {
            this.motionListener.remove();
        }

    }

    onDeviceMotion = (rotation) => {
        this.setState({
            motion: rotation.accelerationIncludingGravity
        });
    }


    detectFaces(doDetect) {
        this.setState({
            faceDetecting: doDetect,
        });
    }


    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        style={{ flex: 1 }}
                        type={this.props.cameraType}
                        onFacesDetected={this.state.faceDetecting ? this.handleFacesDetected : undefined}
                        onFaceDetectionError={this.handleFaceDetectionError}
                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.fast,
                            detectLandmarks: FaceDetector.Constants.Mode.none,
                            runClassifications: FaceDetector.Constants.Mode.none,
                        }}
                        ref={ref => {
                            this.camera = ref;
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                position: 'absolute',
                                bottom: 0,
                            }}>
                            <Text
                                style={styles.textStandard}>
                                {this.state.faceDetected ? 'Face Detected' : 'No Face Detected'}
                            </Text>
                        </View>
                    </Camera>
                </View>
            );
        }
    }

    handleFaceDetectionError = () => {
        //
    }
    handleFacesDetected = ({ faces }) => {
        if (faces.length === 1) {
            this.setState({
                faceDetected: true,
            });
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStandard: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white'
    },
    countdown: {
        fontSize: 40,
        color: 'white'
    }
});