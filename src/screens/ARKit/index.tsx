import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';

export default class ARKitScreen extends Component {
    render() {
        return (
            <ARKit
                style={{ flex: 1, backgroundColor: "#111117" }}
                debug
                // enable plane detection (defaults to Horizontal)
                planeDetection={ARKit.ARPlaneDetection.Horizontal}

                // enable light estimation (defaults to true)
                lightEstimationEnabled
                // get the current lightEstimation (if enabled)
                // it fires rapidly, so better poll it from outside with
                // ARKit.getCurrentLightEstimation()
                onLightEstimation={e => console.log(e.nativeEvent)}

                // event listener for (horizontal) plane detection
                onPlaneDetected={anchor => console.log(anchor)}

                // event listener for plane update
                onPlaneUpdated={anchor => console.log(anchor)}

                // arkit sometimes removes detected planes
                onPlaneRemoved={anchor => console.log(anchor)}

                // event listeners for all anchors, see [Planes and Anchors](#planes-and-anchors)
                onAnchorDetected={anchor => console.log(anchor)}
                onAnchorUpdated={anchor => console.log(anchor)}
                onAnchorRemoved={anchor => console.log(anchor)}

                // you can detect images and will get an anchor for these images
                detectionImages={[{ resourceGroupName: 'DetectionImages' }]}


                onARKitError={console.log} // if arkit could not be initialized (e.g. missing permissions), you will get notified here
            >
                <ARKit.Light
                    position={{ x: 1, y: 3, z: 2 }}
                    type={ARKit.LightType.Omni}
                    color="white"
                />
                <ARKit.Light
                    position={{ x: 0, y: 1, z: 0 }}
                    type={ARKit.LightType.Spot}
                    eulerAngles={{ x: -Math.PI / 2 }}
                    spotInnerAngle={45}
                    spotOuterAngle={45}
                    color="green"
                />
                <ARKit.Text
                    text="Maison Mata"
                    position={{ x: 0, y: 0.2, z: 0 }}
                    font={{ size: 0.15, depth: 0.05 }}
                />
                <ARKit.Model
                    model={{ file: 'art.scnassets/glasses.obj' }}
                    position={{ x: 0, y: -0.2, z: 0 }}
                    scale={0.5}
                //eulerAngles={{ x: 0, y: Math.PI * 2.0, z: 0 }}
                />
            </ARKit>
        );
    }
}