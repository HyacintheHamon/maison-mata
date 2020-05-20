import React from 'react'
import { View, Image } from 'react-native';
import { mocks } from "../constants";
var StoreGlobal = require('../stores/');

const Mask = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition
    }
}) => {
    const glassesWidth = faceWidth
    const glassesHeight = faceHeight / 2.4
    const transformAngle = (
        angleRad = Math.atan(
            (rightEyePosition.y - leftEyePosition.y) /
            (rightEyePosition.x - leftEyePosition.x)
        )
    ) => angleRad * 180 / Math.PI
    return (
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - glassesWidth * 0.35,
            top: leftEyePosition.y - glassesHeight * 0.4
        }}>
            {
                mocks.products.filter(product => product.id === StoreGlobal.activeIndex)
                    .map(product =>
                        <Image
                            source={product.mask}
                            style={{
                                width: glassesWidth,
                                height: glassesHeight,
                                resizeMode: 'contain',
                                transform: [{ rotate: `${transformAngle()}deg` }]
                            }}
                        />
                    )
            }
        </View>
    );
};

export default Mask