import React, { Component } from 'react';
//import { Asset } from 'expo-asset';
import { AR } from 'expo';
import * as Permissions from 'expo-permissions';
import { loadDaeAsync, Renderer, THREE, utils } from 'expo-three';
import { GraphicsView } from 'expo-graphics';
import { BackgroundTexture, Camera, Light } from 'expo-three-ar';

let renderer, scene, camera, mesh;

export default class ARTest extends Component {
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
            alert('camera permission required');
        }
        // Turn off extra warnings
        THREE.suppressExpoWarnings(true);
    }

    render() {
        return (
            <GraphicsView
                style={{ flex: 1 }}
                onContextCreate={this.onContextCreate}
                onRender={this.onRender}
                onResize={this.onResize}
                isArEnabled
                isArRunningStateEnabled
                isArCameraStateEnabled
                arTrackingConfiguration={'ARWorldTrackingConfiguration'}
            />
        );
    }

    // When our context is built we can start coding 3D things.
    onContextCreate = async ({ gl, scale: pixelRatio, width, height }) => {
        // This will allow ARKit to collect Horizontal surfaces
        AR.setPlaneDetection(AR.PlaneDetectionTypes.Horizontal);
        renderer = new Renderer({ gl, pixelRatio, width, height });
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.shadowMap.enabled = true;

        scene = new THREE.Scene();
        scene.background = new BackgroundTexture(renderer);

        camera = new Camera(width, height, 0.01, 1000);

        // Make a cube - notice that each unit is 1 meter in real life, we will make our box 0.1 meters
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        // Simple color material
        const material = new THREE.MeshPhongMaterial({
            color: 0xff00ff,
        });

        // Combine our geometry and material
        let cube = new THREE.Mesh(geometry, material);
        // Place the box 0.4 meters in front of us.
        cube.position.z = -0.4;
        // Add the cube to the scene
        scene.add(this.cube);
    };

    // When the phone rotates, or the view changes size, this method will be called.
    onResize = ({ x, y, scale, width, height }) => {
        // Let's stop the function if we haven't setup our scene yet
        if (!this.renderer) {
            return;
        }
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setPixelRatio(scale);
        this.renderer.setSize(width, height);
    };

    // Called every frame.
    onRender = () => {
        // This will make the points get more rawDataPoints from Expo.AR
        this.points.update();
        // Finally render the scene with the AR Camera
        this.renderer.render(this.scene, this.camera);
    };
}